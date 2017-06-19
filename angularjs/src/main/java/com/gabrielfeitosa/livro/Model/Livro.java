package com.gabrielfeitosa.livro.Model;

import java.io.Serializable;

public class Livro implements Serializable {

    private static int index = 0;

    private Integer id;
    private String titulo;
    private String autor;
    private String categoria;


    public Livro(){
        this.id= ++index;

    }

    public Livro(String titulo, String autor, String categoria) {
        this();
        this.titulo = titulo;
        this.autor = autor;
        this.categoria = categoria;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
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

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
}
