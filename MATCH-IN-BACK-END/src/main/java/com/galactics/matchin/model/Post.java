package com.galactics.matchin.model;

import java.time.LocalTime;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import org.springframework.format.annotation.DateTimeFormat;

@Entity(name = "Post")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String titulo;
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date fecha;
    @DateTimeFormat(pattern = "HH:mm")
    private LocalTime hora;
    private String lugar;
    private String disciplina;
    private int jugadoresTotales;
    private int jugadoresDisponibles;
    private String infoPartido;

    @ManyToOne(fetch = FetchType.EAGER)
    private UserProfile userProfile;

    @OneToMany(mappedBy = "post")
    private List<Comment> comment;

    public Post() {
    }

    public Post(Integer id, String titulo, Date fecha, LocalTime hora, String lugar, String disciplina,
            int jugadoresTotales,
            int jugadoresDisponibles, String infoPartido, UserProfile userProfile, List<Comment> comment) {
        this.id = id;
        this.titulo = titulo;
        this.fecha = fecha;
        this.hora = hora;
        this.lugar = lugar;
        this.disciplina = disciplina;
        this.jugadoresTotales = jugadoresTotales;
        this.jugadoresDisponibles = jugadoresDisponibles;
        this.infoPartido = infoPartido;
        this.userProfile = userProfile;
        this.comment = comment;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public LocalTime getHora() {
        return hora;
    }

    public void setHora(LocalTime hora) {
        this.hora = hora;
    }

    public String getLugar() {
        return lugar;
    }

    public void setLugar(String lugar) {
        this.lugar = lugar;
    }

    public String getDisciplina() {
        return disciplina;
    }

    public void setDisciplina(String disciplina) {
        this.disciplina = disciplina;
    }

    public int getJugadoresTotales() {
        return jugadoresTotales;
    }

    public void setJugadoresTotales(int jugadoresTotales) {
        this.jugadoresTotales = jugadoresTotales;
    }

    public int getJugadoresDisponibles() {
        return jugadoresDisponibles;
    }

    public void setJugadoresDisponibles(int jugadoresDisponibles) {
        this.jugadoresDisponibles = jugadoresDisponibles;
    }

    public String getInfoPartido() {
        return infoPartido;
    }

    public void setInfoPartido(String infoPartido) {
        this.infoPartido = infoPartido;
    }

    public UserProfile getUserProfile() {
        return userProfile;
    }

    public void setUserProfile(UserProfile userProfile) {
        this.userProfile = userProfile;
    }

    public List<Comment> getComment() {
        return comment;
    }

    public void setComment(List<Comment> comment) {
        this.comment = comment;
    }

}