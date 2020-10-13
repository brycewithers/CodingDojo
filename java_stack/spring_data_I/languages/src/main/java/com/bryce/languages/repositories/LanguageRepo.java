package com.bryce.languages.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bryce.languages.models.Language;

@Repository
public interface LanguageRepo extends CrudRepository<Language, Long>{
    // this method finds all languages
	List<Language> findAll();
    
    // this method finds languages with names containing the search string
    List<Language> findByNameContaining(String search);
    
    // this method counts how many names contain a certain string
    Long countByNameContaining(String search);
    
    // this method deletes a language that starts with a specific name
    Long deleteByNameStartingWith(String search);
}
