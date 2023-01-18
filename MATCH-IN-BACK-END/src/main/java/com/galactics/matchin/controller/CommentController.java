package com.galactics.matchin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.galactics.matchin.model.Comment;
import com.galactics.matchin.service.CommentService;

@CrossOrigin("*")
@RestController
public class CommentController {
    private CommentService commentService;

    public CommentController(@Autowired CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping("/Comment/save")
    public void saveComment(@RequestBody Comment comment) {
        commentService.saveCommentService(comment);
    }

    @PutMapping("/Comment/update")
    public void updateComment(@RequestBody Comment comment) {
        commentService.updateCommentService(comment);
    }

    @GetMapping("/Comment/findAll")
    public List<Comment> findAllComment() {
        return commentService.findAllComment();
    }

    @DeleteMapping("/Comment/delete/{id}")
    public void deleteComment(@PathVariable Integer id) {
        commentService.deleteCommentService(id);
    }
}
