package com.galactics.matchin.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.galactics.matchin.model.Team;
import com.galactics.matchin.repository.TeamRepository;

@Service
public class TeamService {
    TeamRepository teamRepository;

    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public void saveTeamService(Team Team) {
        teamRepository.save(Team);
    }

    public void updateTeamService(Team Team) {
        teamRepository.save(Team);
    }

    public List<Team> findAllTeam() {
        return teamRepository.findAll();
    }

    public void deleteTeamService(Integer id) {
        teamRepository.deleteById(id);
    }
}
