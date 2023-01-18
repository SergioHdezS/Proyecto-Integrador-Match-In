package com.galactics.matchin.model;

import java.util.Date;
import java.util.List;

import javax.persistence.*;

import org.springframework.format.annotation.DateTimeFormat;

@Entity(name = "Team")
public class Team {
    @Id
    @GeneratedValue
    private Integer id;
    @Column(length = 30)
    private String name;
    @Column(length = 200)
    private String description;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date createdAt;

    @OneToMany(mappedBy = "team", cascade = CascadeType.ALL)
    private List<UserProfile> userProfile;

    public Team() {
    }

    public Team(Integer id, String name, String description, Date createdAt, List<UserProfile> userProfile) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.createdAt = createdAt;
        this.userProfile = userProfile;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public List<UserProfile> getUserProfile() {
        return userProfile;
    }

    public void setUserProfile(List<UserProfile> userProfile) {
        this.userProfile = userProfile;
    }

}
