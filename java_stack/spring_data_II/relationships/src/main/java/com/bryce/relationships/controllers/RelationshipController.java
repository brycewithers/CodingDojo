package com.bryce.relationships.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bryce.relationships.models.License;
import com.bryce.relationships.models.Person;
import com.bryce.relationships.services.LicenseService;
import com.bryce.relationships.services.PersonService;

public class RelationshipController {
	private final PersonService personService;
	private final LicenseService licenseService;
	
	public RelationshipController(PersonService personService, LicenseService licenseService) {
		this.personService = personService;
		this.licenseService = licenseService;
	}
	
	@RequestMapping("/persons/new")
	public String newPersonPage(@ModelAttribute("person") Person person) {
		return "newperson.jsp";
	}
	
	@PostMapping("/persons")
	public String createPerson(@Valid @ModelAttribute("person") Person person, BindingResult result) {
		if(result.hasErrors()) {
			return "newperson.jsp";
		}else {
			personService.createPerson(person);
			System.out.println("Created person successfully");
			return "redirect:/persons/new";
		}
	}
	
	@RequestMapping("/licenses/new")
	public String newLicenses(Model model, @ModelAttribute("license") License license) {
		List<Person> persons = personService.findAllPersons();
		persons.removeIf(p -> p.getLicense() != null); 
		System.out.println("People with no license: " + persons);
		model.addAttribute("persons", persons);
		return "newlicense.jsp";
	}
	
	@PostMapping("/licenses")
	public String createLicense(@ModelAttribute("license") License license, BindingResult result) {
		if(result.hasErrors()) {
			return "newLicense.jsp";
		}else {
			licenseService.createLicense(license);
			return "redirect:/persons/" + license.getPerson().getId();
		}
	}
	
	@RequestMapping("/persons/{id}")
	public String personsPage(@PathVariable("id") Long id, Model model) {
		Person person = personService.findPersonById(id);
		License license = person.getLicense();
		model.addAttribute("person", person);
		model.addAttribute("license", license);
		return "showperson.jsp";
	}

}
