package com.galactics.matchin.model;

import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity(name = "UserProfile")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class UserProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(length = 20)
    private String city;
    private String image;
    private Float rating;
    @Column(length = 50, unique = true)
    private String nickName;
    private String prefPosition;

    @OneToOne()
    @JoinColumn(name = "user_id", nullable = false)
    public User user;

    @OneToMany(mappedBy = "userProfile", cascade = CascadeType.ALL)
    private List<Post> post;

    @ManyToOne(fetch = FetchType.EAGER)
    private Team team;

    @OneToMany(mappedBy = "userProfile", cascade = CascadeType.ALL)
    private List<Comment> comment;

    public UserProfile() {
    }

    public UserProfile(Integer id, String city, String image, Float rating, String nickName,
            String prefPosition, User user, List<Post> post, Team team, List<Comment> comment) {
        this.id = id;
        this.city = city;
        this.image = image;
        this.rating = rating;
        this.nickName = nickName;
        this.prefPosition = prefPosition;
        this.user = user;
        this.post = post;
        this.team = team;
        this.comment = comment;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Float getRating() {
        return rating;
    }

    public void setRating(Float rating) {
        this.rating = rating;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getPrefPosition() {
        return prefPosition;
    }

    public void setPrefPosition(String prefPosition) {
        this.prefPosition = prefPosition;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Post> getPost() {
        return post;
    }

    public void setPost(List<Post> post) {
        this.post = post;
    }

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    public List<Comment> getComment() {
        return comment;
    }

    public void setComment(List<Comment> comment) {
        this.comment = comment;
    }

}
