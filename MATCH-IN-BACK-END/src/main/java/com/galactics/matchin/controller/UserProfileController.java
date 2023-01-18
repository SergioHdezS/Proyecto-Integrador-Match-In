package com.galactics.matchin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.galactics.matchin.model.UserProfile;
import com.galactics.matchin.service.UserProfileService;

@CrossOrigin("*")
@RestController
public class UserProfileController {
    private UserProfileService userProfileService;

    public UserProfileController(@Autowired UserProfileService userProfileService) {
        this.userProfileService = userProfileService;
    }

    @PostMapping("/UserProfile/save")
    public void saveUserProfile(@RequestBody UserProfile userProfile) {
        userProfileService.saveUserProfileService(userProfile);
    }

    @PutMapping("/UserProfile/update")
    public void updateUserProfile(@RequestBody UserProfile userProfile) {
        userProfileService.updateUserProfileService(userProfile);
    }

    @GetMapping("/UserProfile/findAll")
    public List<UserProfile> findAllUserProfile() {
        return userProfileService.findAllUserProfile();
    }

    @GetMapping("/UserProfile/{id}")
    public UserProfile getProfile(@PathVariable Integer id) {
        return userProfileService.getProfile(id);
    }

    @DeleteMapping("/UserProfile/delete/{id}")
    public void deleteUserProfile(@PathVariable Integer id) {
        userProfileService.deleteUserProfileService(id);
    }
}
