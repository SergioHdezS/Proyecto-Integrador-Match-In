package com.galactics.matchin.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.galactics.matchin.model.Team;

public interface TeamRepository extends JpaRepository<Team, Integer> {

}
