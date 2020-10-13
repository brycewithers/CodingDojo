package com.bryce.languages.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bryce.languages.models.Language;
import com.bryce.languages.repositories.LanguageRepo;

@Service
public class LanguageService {
    // adding the language repository as a dependency
    private final LanguageRepo languageRepo;
    
    public LanguageService(LanguageRepo languageRepo) {
        this.languageRepo = languageRepo;
    }
    
    // returns all the languages
    public List<Language> allLanguages() {
        return languageRepo.findAll();
    }
    
    // creates a language
    public Language createLanguage(Language l) {
        return languageRepo.save(l);
    }
    
    // retrieves a language
    public Language findLanguage(Long id) {
        Optional<Language> optionalLanguage = languageRepo.findById(id);
        if(optionalLanguage.isPresent()) {
            return optionalLanguage.get();
        } else {
            return null;
        }
    }
    
    // update a language
    public Language updateLanguage(Language l) {
    	return languageRepo.save(l);
    }
    
    // update a language
    public Language updateLanguage(Long id, String name, String creator, String currentVersion) {
    	Language l = this.findLanguage(id);
    	if (l != null) {
    		l.setName(name);
    		l.setCreator(creator);
    		l.setCurrentVersion(currentVersion);
    		return languageRepo.save(l);
    	}
    	return null;
    }
    
    // delete a language
    public void deleteLanguage(Long id) {
    	languageRepo.deleteById(id);
    }
}