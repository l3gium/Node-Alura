import express, { Router } from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.GetLivros);
routes.get("/livros/busca", LivroController.GetLivrosByEditora)
routes.get("/livros/:id", LivroController.GetLivroById);
routes.post("/livros", LivroController.CreateLivro);
routes.put("/livros/:id", LivroController.UpdateLivro);
routes.delete("/livros/:id", LivroController.DeleteLivro);

export default routes;