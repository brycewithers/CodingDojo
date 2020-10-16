package com.bryce.relationships.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bryce.relationships.models.Ninja;
import com.bryce.relationships.repositories.NinjaRepository;

@Service
public class NinjaService {
	
	private final NinjaRepository ninjaRepository;
	
	public NinjaService(NinjaRepository ninjaRepository) {
		this.ninjaRepository = ninjaRepository;
	}
	
	// get all of the ninjas in the db
	public List<Ninja> findAll(){
		return ninjaRepository.findAll();
	}
	
	// create a ninja
	public void create(Ninja ninja) {
		ninjaRepository.save(ninja);
		return;
	}
}
