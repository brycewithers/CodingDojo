package com.heroes.main.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.heroes.main.models.Team;
import com.heroes.main.repos.TeamRepo;

@Service
public class TeamService {
	
	@Autowired
	private TeamRepo teamRepo;
	
	public List<Team> allTeams(){
		return teamRepo.findAll();
	}
	
	public Team save(Team t) {
		teamTeam.
		return teamRepo.save(t);
	}
	
	public Team findById(Long id) {
		Optional<Team> team = teamRepo.findById(id);
		
		if(team.isPresent()) {
			return team.get();
		}else {
			return null;
		}
	}
	
	public void delete(Long id) {
		teamRepo.deleteById(id);
	}
	
	public Boolean isTeamLargerThanFive(Long id) {
		Optional<Team> team = teamRepo.findById(id);
		
		if(team.isPresent()) {
			if(team.get().getHeroes().size() > 5) {
				return true;
			}else {
				return false;
			}
		}else {
			return false;
		}
	}

}
