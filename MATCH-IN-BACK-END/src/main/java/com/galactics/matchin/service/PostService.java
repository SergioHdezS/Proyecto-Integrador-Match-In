package com.galactics.matchin.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.galactics.matchin.model.Post;
import com.galactics.matchin.repository.PostRepository;

@Service
@Transactional
public class PostService {

    private PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public void savePostService(Post post) {
        postRepository.save(post);
    }

    public void updatePostService(Post post) {
        postRepository.save(post);
    }

    public List<Post> findAllPost() {
        return postRepository.findAll();
    }

    public void deletePostService(Integer id) {
        postRepository.deleteById(id);
    }
}
