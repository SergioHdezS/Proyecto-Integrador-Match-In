package com.galactics.matchin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.galactics.matchin.model.Team;
import com.galactics.matchin.service.TeamService;

@CrossOrigin("*")
@RestController
public class TeamController {
    private TeamService teamService;

    public TeamController(@Autowired TeamService teamService) {
        this.teamService = teamService;
    }

    @PostMapping("/Team/save")
    public void saveTeam(@RequestBody Team team) {
        teamService.saveTeamService(team);
    }

    @PutMapping("/Team/update")
    public void updateTeam(@RequestBody Team team) {
        teamService.updateTeamService(team);
    }

    @GetMapping("/Team/findAll")
    public List<Team> findAllTeam() {
        return teamService.findAllTeam();
    }

    @DeleteMapping("/Team/delete/{id}")
    public void deleteTeam(@PathVariable Integer id) {
        teamService.deleteTeamService(id);
    }
}
