import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await conectaNaDataBase();

await conexao.on("error", (err) =>{
    console.error("Error: ", err);
});

await conexao.once("open", () => {
    console.log("Connection succeeded");
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
})

//PÁGINA LIVROS
app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({})
    res.status(200).json(listaLivros);
})

app.get("/livros/:id", async (req, res) =>{
    const livro = await livro.find({id})
    res.status(200).json(livro);
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

