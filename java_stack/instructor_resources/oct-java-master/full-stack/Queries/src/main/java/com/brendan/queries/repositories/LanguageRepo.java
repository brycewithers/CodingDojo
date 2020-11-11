package com.brendan.queries.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.brendan.queries.models.Language;

public interface LanguageRepo extends CrudRepository<Language, Long>{

	List<Language> findAll();

//	@Query("SELECT c.name, c.continent, l.language, l.percentage FROM Country c JOIN c.languages l WHERE language = ?1 ORDER BY percentage DESC")
//	List<Object[]> findCountryByLang(String lang);
}