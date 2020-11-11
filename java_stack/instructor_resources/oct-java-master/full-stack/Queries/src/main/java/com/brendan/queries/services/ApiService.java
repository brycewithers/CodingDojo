package com.brendan.queries.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.brendan.queries.repositories.CityRepo;
import com.brendan.queries.repositories.CountryRepo;
import com.brendan.queries.repositories.LanguageRepo;

@Service
public class ApiService {
	private CountryRepo countryRepo;
	private LanguageRepo languageRepo;
	private CityRepo cityRepo;
	
	public ApiService(CountryRepo countryRepo, LanguageRepo languageRepo, CityRepo cityRepo) {
		this.countryRepo = countryRepo;
		this.languageRepo = languageRepo;
		this.cityRepo = cityRepo;
	}
	
	
	public List<Object[]> getCountryByLanguage(String lang){
		return this.countryRepo.findCountryByLang(lang);
	}
	
	public List<Object[]> countriesThatDontSpeakEnglish(){
		return this.countryRepo.countriesThatDontSpeakEnglish();
	}
	
	public List<Object[]> countCountriesInRegions(){
		return this.countryRepo.countCountriesInRegions();
	}
	

}
