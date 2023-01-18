package com.galactics.matchin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.galactics.matchin.model.Post;
import com.galactics.matchin.service.PostService;

@RestController
@CrossOrigin("*")
public class PostController {

    private PostService postService;

    public PostController(@Autowired PostService postService) {
        this.postService = postService;
    }

    @PostMapping("/Post/save")
    public void savePost(@RequestBody Post post) {
        postService.savePostService(post);
    }

    @PutMapping("/Post/update")
    public void updatePost(@RequestBody Post post) {
        postService.updatePostService(post);
    }

    @GetMapping("/Post/findAll")
    public List<Post> findAllPost() {
        return postService.findAllPost();
    }

    @DeleteMapping("/Post/delete/{id}")
    public void deletePost(@PathVariable Integer id) {
        postService.deletePostService(id);
    }
}
