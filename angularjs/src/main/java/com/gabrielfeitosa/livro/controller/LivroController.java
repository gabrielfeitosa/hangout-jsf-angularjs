package com.gabrielfeitosa.livro.controller;

import com.gabrielfeitosa.livro.Model.Livro;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Path("/livro")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class LivroController {

    private static Map<Integer, Livro> livros = new HashMap<>();

    static{
        for(int i = 0; i< 3; i++){
            Livro livro = new Livro("Livro "+i, "Autor "+i,  i % 2 == 0 ? "Drama": "Comédia");
            livros.put(livro.getId(), livro);
        }
    }

    @GET
    public List<Livro> getLivros() {
        return new ArrayList<>(livros.values());
    }

    @GET
    @Path("/{id}")
    public Livro getLivro(@PathParam("id") Integer id) {
        return livros.get(id);
    }

    @DELETE
    @Path("/{id}")
    public Response excluir(@PathParam("id") Integer id){
        livros.remove(id);
        return Response.status(202).entity("Livro excluido com sucesso!").build();
    }

    @POST
    public Response salvar(Livro livro) throws URISyntaxException {
        livros.put(livro.getId(), livro);
        return Response.created(new URI("/api/livro/"+livro.getId())).build();
    }

    @PUT
    @Path("/{id}")
    public Response atualizar(@PathParam("id") Integer id, Livro livro){
        livro.setId(id);
        livros.put(livro.getId(), livro);
        return Response.ok().entity(livro).build();
    }

}
