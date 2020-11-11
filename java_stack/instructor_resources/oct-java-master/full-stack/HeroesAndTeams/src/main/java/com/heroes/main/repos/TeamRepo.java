package com.heroes.main.repos;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.heroes.main.models.Team;

@Repository
public interface TeamRepo extends CrudRepository<Team, Long> {
	List<Team> findAll();
}
