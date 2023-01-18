package com.galactics.matchin.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.galactics.matchin.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

    List<User> findByMailAndPassword(String mail, String password);
}
