package com.brendan.queries.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.brendan.queries.services.ApiService;

@RestController
public class ApiController {
	
	@Autowired
	private ApiService api;
	
	@GetMapping("/not-english")
	public List<Object[]> countriesThatDontSpeakEnglish(){
		return api.countriesThatDontSpeakEnglish();
	}
	
	@GetMapping("/country/regions")
	public List<Object[]> countCountries(){
		return api.countCountriesInRegions();
	}
	
	
	@GetMapping("/country/{language}")
	public List<Object[]> getCountryByLanguage(@PathVariable("language") String language) {
		
		return api.getCountryByLanguage(language);
	}
	
}
