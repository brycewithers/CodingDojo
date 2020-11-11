package com.heroes.main.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.heroes.main.models.Hero;
import com.heroes.main.repos.HeroRepo;

@Service
public class HeroService {
	
	@Autowired
	private HeroRepo heroRepo;
	
	public List<Hero> allHeroes(){
		return heroRepo.findAll();
	}
	
	public Hero save(Hero h) {
		return heroRepo.save(h);
	}
	
	public Hero findById(Long id) {
		Optional<Hero> hero = heroRepo.findById(id);
		
		if(hero.isPresent()) {
			return hero.get();
		}else {
			return null;
		}
	}
	
	public void delete(Long id) {
		heroRepo.deleteById(id);
	}
	

}
