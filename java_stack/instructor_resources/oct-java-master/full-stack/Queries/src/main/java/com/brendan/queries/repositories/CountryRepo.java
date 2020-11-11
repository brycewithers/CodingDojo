package com.brendan.queries.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.brendan.queries.models.Country;

public interface CountryRepo extends CrudRepository<Country, Long>{
//	@Query(value="SELECT * from countries", nativeQuery=true)
	List<Country> findAll();
	
	
	
	// 1. What query would you run to get all the countries that speak Slovene? 
	// Your query should return the name of the country, language and language percentage. 
	// Your query should arrange the result by language percentage in descending order. (1)
	@Query("SELECT c.name, c.continent, l.language, l.percentage FROM Country c JOIN c.languages l WHERE language = ?1 ORDER BY percentage DESC")
	List<Object[]> findCountryByLang(String lang);
	
	@Query("SELECT c.name, c.continent, l.language, l.percentage FROM Country c JOIN c.languages l WHERE language != 'English' ORDER BY percentage DESC")
	List<Object[]> countriesThatDontSpeakEnglish();
	
	
	@Query("SELECT c.region, COUNT(c.id) AS numberOfCountries FROM Country c GROUP BY c.region ORDER BY numberOfCountries DESC")
	List<Object[]> countCountriesInRegions();
}