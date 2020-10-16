package com.bryce.relationships.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bryce.relationships.models.Dojo;
import com.bryce.relationships.repositories.DojoRepository;

@Service
public class DojoService {
	
	private final DojoRepository dojoRepository;
	
	public DojoService(DojoRepository dojoRepository) {
		this.dojoRepository = dojoRepository;
	}
	
	// find all of the dojos in the db
	public List<Dojo> findAll() {
		return dojoRepository.findAll();
	}
	
	// create a new dojo
	public void create(Dojo dojo) {
		dojoRepository.save(dojo);
		return; 
	}
	
	// find a singular dojo by it's id
	public Dojo findById(Long id) {
		Optional<Dojo> dojo = dojoRepository.findById(id);
		if(dojo.isPresent()) {
			return dojo.get();
		} else {
			return null;
		}
	}
}
