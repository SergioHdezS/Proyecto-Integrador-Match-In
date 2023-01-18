package com.galactics.matchin.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.galactics.matchin.model.UserProfile;
import com.galactics.matchin.repository.UserProfileRepository;

@Service
public class UserProfileService {
    UserProfileRepository userProfileRepository;

    public UserProfileService(UserProfileRepository userProfileRepository) {
        this.userProfileRepository = userProfileRepository;
    }

    public void saveUserProfileService(UserProfile userProfile) {
        userProfileRepository.save(userProfile);
    }

    public void updateUserProfileService(UserProfile userProfile) {
        userProfileRepository.save(userProfile);
    }

    public List<UserProfile> findAllUserProfile() {
        return userProfileRepository.findAll();
    }

    public UserProfile getProfile(Integer id) {
        Optional<UserProfile> profiles = userProfileRepository.findById(id);
        return profiles.orElse(null);
    }

    public void deleteUserProfileService(Integer id) {
        userProfileRepository.deleteById(id);
    }
}
