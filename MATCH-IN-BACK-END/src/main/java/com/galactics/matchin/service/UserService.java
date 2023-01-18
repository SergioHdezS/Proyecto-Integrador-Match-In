package com.galactics.matchin.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.galactics.matchin.model.User;
import com.galactics.matchin.repository.UserRepository;

@Service
public class UserService {
    UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User saveUserService(User user) {
        User result = userRepository.save(user);
        return result;
    }

    public void updateUserService(User user) {
        userRepository.save(user);
    }

    public List<User> findAllUser() {
        return userRepository.findAll();
    }

    public User getUser(Integer id) {
        Optional<User> users = userRepository.findById(id);
        return users.orElse(null);
    }

    public void deleteUserService(Integer id) {
        userRepository.deleteById(id);
    }

    public String loginUser(String mail, String password) {
        List<User> usuario = userRepository.findByMailAndPassword(mail, password);
        if (usuario.size() > 0) {
            return "Success";
        } else {
            return "El correo o la contraseña no son correctas";
        }
    }
}