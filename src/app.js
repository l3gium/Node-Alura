import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";

const conexao = await conectaNaDataBase();

await conexao.on("error", (err) =>{
    console.error("Error: ", err);
});

await conexao.once("open", () => {
    console.log("Connection succeeded");
});

const app = express();
app.use(express.json());

const livros= [
    {
        id: 1,
        titulo: "O Senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
]

function buscaLivro(id){
    
    //retun _context.livros.where(l => l.id == id) em C#
    
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
})

//PÁGINA LIVROS
app.get("/livros", (req, res) => {
    res.status(200).json(livros);
})

app.get("/livros/:id", (req, res) =>{
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
})

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).send(livros)
})

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso");
})
export default app;

