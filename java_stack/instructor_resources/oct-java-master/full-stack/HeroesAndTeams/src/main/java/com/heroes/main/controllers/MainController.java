package com.heroes.main.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.heroes.main.models.Hero;
import com.heroes.main.models.Team;
import com.heroes.main.services.HeroService;
import com.heroes.main.services.TeamService;

@Controller
public class MainController {
	
	@Autowired
	private TeamService teamService;
	
	@Autowired
	private HeroService heroService;
	
	@GetMapping("/create-hero")
	public String createHero(@ModelAttribute("hero") Hero hero, Model model) {
		model.addAttribute("teams", teamService.allTeams());
		return "createHero.jsp";
	}
	

	@PostMapping("/create-hero")
	public String submitTeam(@Valid @ModelAttribute("hero") Hero hero, BindingResult result) {
		if(result.hasErrors()) {
			return "createHero.jsp";
		}
		
		
		heroService.save(hero);
		return "redirect:/create-hero";
	}
	
	
	
	@GetMapping("/create-team")
	public String createTeam(@ModelAttribute("team") Team team, Model model, HttpSession session) {
		
		if(session.getAttribute("userid") != null) {
			model.addAttribute("teams", teamService.allTeams());
			return "createTeam.jsp";
		}
		return "redirect:/login";
	}
	
	@PostMapping("/create-team")
	public String submitTeam(@Valid @ModelAttribute("team") Team team, BindingResult result) {
		if(result.hasErrors()) {
			return "createTeam.jsp";
		}
		
		
		teamService.save(team);
		return "redirect:/create-team";
		
	}
	
	@GetMapping("/edit-team/{id}")
	public String findOne(@PathVariable("id") Long id, Model model) {
		Team team = teamService.findById(id);
		model.addAttribute("team", team);
		return "editTeam.jsp";
	}
	
	@PostMapping("/edit-team/{id}")
	public String editTeam(@PathVariable("id") Long id, 
						   @Valid @ModelAttribute("team") Team team, 
						   BindingResult result) {
		if(result.hasErrors()) {
			return "edit-team/" + id + ".jsp";
		}
		
		teamService.save(team);
		return "redirect:/create-team";
	}
	
	@PostMapping("/delete-team/{id}")
	public String delete(@PathVariable("id") Long id) {
		teamService.delete(id);
		return "redirect:/create-team";
	}
	
	@GetMapping("/all-teams")
	public String all(Model model) {
		
		model.addAttribute("teams", teamService.allTeams());
		return "allTeams.jsp";
	}
	
	
	
}
