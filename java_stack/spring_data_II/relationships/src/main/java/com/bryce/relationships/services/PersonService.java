package com.bryce.relationships.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bryce.relationships.models.Person;
import com.bryce.relationships.repositories.PersonRepository;

@Service
public class PersonService {
	
	private final PersonRepository personRepository;
	
	public PersonService(PersonRepository personRepository) {
		this.personRepository = personRepository;
	}
	
    // returns all the persons
    public List<Person> findAllPersons() {
        return personRepository.findAll();
    }
	
    // creates a person
    public Person createPerson(Person b) {
        return personRepository.save(b);
    }
	
    // retrieves a person
    public Person findPersonById(Long id) {
        Optional<Person> optionalPerson = personRepository.findById(id);
        if(optionalPerson.isPresent()) {
            return optionalPerson.get();
        } else {
            return null;
        }
    }
    
    // update a person
    public Person updatePerson(Person person) {
    	return personRepository.save(person);
    }
    
    // delete a person
    public void deletePerson(Long id) {
    	if (personRepository.existsById(id)) {
    		personRepository.deleteById(id);
    	}
    }
}
