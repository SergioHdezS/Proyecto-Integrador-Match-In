package com.galactics.matchin.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.galactics.matchin.model.Comment;
import com.galactics.matchin.repository.CommentRepository;

@Service
public class CommentService {
    CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public void saveCommentService(Comment comment) {
        commentRepository.save(comment);
    }

    public void updateCommentService(Comment comment) {
        commentRepository.save(comment);
    }

    public List<Comment> findAllComment() {
        return commentRepository.findAll();
    }

    public void deleteCommentService(Integer id) {
        commentRepository.deleteById(id);
    }
}
