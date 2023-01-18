package com.galactics.matchin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.galactics.matchin.model.User;
import com.galactics.matchin.model.UserProfile;
import com.galactics.matchin.model.LoginForm;
import com.galactics.matchin.service.UserProfileService;
import com.galactics.matchin.service.UserService;

@CrossOrigin("*")
@RestController
public class UserController {
    private UserService userService;
    private UserProfileService userProfileService;

    public UserController(@Autowired UserService userService, @Autowired UserProfileService userProfileService) {
        this.userService = userService;
        this.userProfileService = userProfileService;
    }

    @PostMapping("/User/save")
    public User saveUser(@RequestBody User user) {
        User result = userService.saveUserService(user);
        UserProfile profile = new UserProfile();
        profile.setUser(result);
        userProfileService.saveUserProfileService(profile);
        return result;
    }

    @PutMapping("/User/update")
    public void updateUser(@RequestBody User user) {
        userService.updateUserService(user);
    }

    @GetMapping("/User/findAll")
    public List<User> findAllUser() {
        return userService.findAllUser();
    }

    @GetMapping("/User/{id}")
    public User getUser(@PathVariable Integer id) {
        return userService.getUser(id);
    }

    @DeleteMapping("/User/delete/{id}")
    public void deleteUser(@PathVariable Integer id) {
        userService.deleteUserService(id);
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginForm loginForm) {
        return userService.loginUser(loginForm.getMail(), loginForm.getPassword());
    }
}
