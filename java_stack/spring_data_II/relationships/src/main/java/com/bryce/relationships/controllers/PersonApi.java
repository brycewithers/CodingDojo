package com.bryce.relationships.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bryce.relationships.models.Person;
import com.bryce.relationships.services.PersonService;

@RestController
public class PersonApi {
	
    private final PersonService personService;
    public PersonApi(PersonService personService){
        this.personService = personService;
    }
    
    @RequestMapping("/api/persons")
    public List<Person> index() {
        return personService.findAllPersons();
    }
    
    @RequestMapping(value="/api/persons", method=RequestMethod.POST)
    public Person create(@RequestParam(value="firstName") String firstName, 
    				     @RequestParam(value="lastName") String lastName) {
        Person person = new Person(firstName, lastName);
        return personService.createPerson(person);
    }
    
    @RequestMapping("/api/persons/{id}")
    public Person show(@PathVariable("id") Long id) {
        Person person = personService.findPersonById(id);
        return person;
    }
    
    @RequestMapping(value="/api/persons/{id}/edit", method=RequestMethod.PUT)
	public Person update(@ModelAttribute("person") Person person) {
		Person updatePerson = personService.updatePerson(person);
		return updatePerson;
	}
    
    @RequestMapping(value="/api/persons/{id}", method=RequestMethod.DELETE)
    public void destroy(@PathVariable("id") Long id) {
        personService.deletePerson(id);
    }
}
