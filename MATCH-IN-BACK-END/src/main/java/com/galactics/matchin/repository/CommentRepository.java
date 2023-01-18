package com.galactics.matchin.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.galactics.matchin.model.Comment;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

}
