import livro from "../models/Livro.js";


class LivroController{

    static async GetLivros(req, res){
        try{

            const listaLivros = await livro.find({});
            res.status(200).send(listaLivros);

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

    static async PostLivros(req, res){

        try{
            const novoLivro = await livro.create(req.body);
            res.status(201).
            json({ 
                    message: "Livro criado com sucesso", 
                    livro: novoLivro
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
};
 
export default LivroController; 