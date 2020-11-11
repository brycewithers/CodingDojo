package com.brendan.queries.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.brendan.queries.models.City;

public interface CityRepo extends CrudRepository<City, Long>{

	List<City> findAll();
	

	
	
	
}
