import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js"

class LivroController{

    static async GetLivros(req, res){
        try{

            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);

        } catch(err){
            res.status(500).json({ message: `Houve um erro interno na listagem dos livros: ${err.message}`});
        }
    }

    static async GetLivroById(req, res){
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).send(livroEncontrado);
        } catch(err){
            res.status(500).json({ message: `Houve um erro interno na busca do livro: ${err.message}`});
        }
    }

    static async CreateLivro(req, res){

        const novoLivro = req.body;
        try{
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {...novoLivro, autor: {...autorEncontrado._doc}};
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).
            json({ 
                    message: "Livro criado com sucesso", 
                    livro: livroCriado
            });
        } catch(err){
            res.status(500).json({ message: `Houve um erro interno ao cadastrar livro: ${err.message}`});
        }
    }

    static async UpdateLivro(req, res){
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json( {message: `Livro atualizado com sucesso`});

        } catch(err){
            res.status(500).json({ message: `Houve um erro interno ao atualizar o livro: ${err.message}`});
        }
    }

    static async DeleteLivro(req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: `Livro deletado com sucesso`});        

        } catch(err){
            res.status(500).json({ message: `Houve um erro interno ao deletar o livro: ${err.message}`});
        }
    }

    static async GetLivrosByEditora(req, res){
        const editora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({ editora: editora });
            res.status(200).json(livrosPorEditora);
        } catch(err){
            res.status(500).json({ message: `Houve um erro interno ao encontrar os livros: ${err.message}`});
        }
    }
};
 
export default LivroController; 