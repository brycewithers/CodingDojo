package com.bryce.relationships.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bryce.relationships.models.Dojo;
import com.bryce.relationships.models.Ninja;
import com.bryce.relationships.services.DojoService;
import com.bryce.relationships.services.NinjaService;

@Controller
public class DojosAndNinjasController {

	private final DojoService dojoService;
	private final NinjaService ninjaService;
	
	public DojosAndNinjasController(DojoService dojoService, NinjaService ninjaService) {
		this.dojoService = dojoService;
		this.ninjaService = ninjaService;
	}
	
	// glue this url pattern to a method that will render a page for adding new dojos
	@RequestMapping("/dojos/new")
	public String addDojo(@ModelAttribute("dojo") Dojo dojo) {
		return "/dojosandninjas/newdojo.jsp";
	}
	
	// process the form
	@PostMapping("/dojos/new")
	public String newDojo(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result) {
		if(result.hasErrors()) {
			return "newdojo.jsp";
		} else {
			dojoService.create(dojo);
			return "redirect:/dojos/"+dojo.getId();
		}
	}
	
	// glue this url pattern to a method that will render a page for adding a new ninja
	@RequestMapping("/ninjas/new")
	public String addNinja(Model model, @ModelAttribute("ninja") Ninja ninja) {
		model.addAttribute("dojos", dojoService.findAll());
		return "/dojosandninjas/newninja.jsp";
	}
	
	// process the form
	@PostMapping("/ninjas/new")
	public String newNinja(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result, Model model) {
		if(result.hasErrors()) {
			model.addAttribute("dojos", dojoService.findAll());
			return "/dojosandninjas/newninja.jsp";
		} else {
			ninjaService.create(ninja);
			return "redirect:/ninjas/new";
		}
	}
	
	@RequestMapping("/dojos/{id}")
	public String showDojo(@PathVariable("id") Long id, Model model) {
		Dojo dojo = dojoService.findById(id);
		model.addAttribute("dojo", dojo);
		return "/dojosandninjas/dojo.jsp";
	}
}
