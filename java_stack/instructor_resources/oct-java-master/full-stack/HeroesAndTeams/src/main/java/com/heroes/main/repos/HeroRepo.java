package com.heroes.main.repos;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.heroes.main.models.Hero;

@Repository
public interface HeroRepo extends CrudRepository<Hero, Long> {
	List<Hero> findAll();
}
