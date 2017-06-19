package com.gabrielfeitosa.livro.controller;

import com.gabrielfeitosa.livro.Model.Livro;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@ManagedBean
@SessionScoped
public class LivroController {

    private Livro livro;
    private Map<Integer, Livro> livros = new HashMap<>();

    public LivroController() {
        for(int i = 0; i< 3; i++){
            Livro livro = new Livro("Livro "+i, "Autor "+i, i % 2 == 0 ? "Drama": "Comédia");
            livros.put(livro.getId(), livro);
        }
    }

    public List<Livro> getLivros() {
        return new ArrayList<>(livros.values());
    }

    public Livro getLivro() {
        return livro;
    }

    public void setLivro(Livro livro) {
        this.livro = livro;
    }

    public String prepararNovo(){
        livro = new Livro();
        return "manter";
    }

    public String prepararAtualizacao(Livro livro){
        this.livro = livro;
        return "manter";
    }

    public String excluir(Integer id){
        livros.remove(id);
        return "index";

    }

    public String submeter(){
        livros.put(livro.getId(), livro);
        return "index";
    }

}
