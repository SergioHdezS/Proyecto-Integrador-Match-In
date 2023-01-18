package com.galactics.matchin.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.galactics.matchin.model.UserProfile;

public interface UserProfileRepository extends JpaRepository<UserProfile, Integer> {

}
