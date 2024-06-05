import { autor } from "../models/Autor.js";

class AutorController{
    
    static async GetAutores(req, res){
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch(err){
            res.status(500).json({ message: `Houve um erro interno na listagem de autores: ${err.message}`});
        }
    } 

    static async GetAutoresById(req, res){
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch(err){
            res.status(500).json({ message: `Houve um erro interno na busca por autor: ${err.message}`});
        }
    }

    static async CreateAutor(req, res){
        try {
            const novoAutor = await autor.create(req.body);
            res.status(200).
            json({message: "Autor criado com sucesso",
                autor: novoAutor
            })
        } catch(err){
            res.status(500).json({ message: `Houve um erro interno ao criar autor: ${err.message}`});
        }
    }

    static async UpdateAutor(req, res){
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Autor atualizado com sucesso"});
        } catch(err){
            res.status(500).json({ message: `Houve um erro interno atualizar autor: ${err.message}`});
        }
    }

    static async DeleteAutor(req, res){

        try {
            const id = req.params.id;
        await autor.findByIdAndDelete(id);
        res.status(200).json({ message: "Autor deletado com sucesso"});

        } catch(err){
            res.status(500).json({ message: `Houve um erro interno ao deletar o autor: ${err.message}`});
        }
        
    }
}

export default AutorController;