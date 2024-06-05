import express, { Router } from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.GetLivros);
routes.get("/livros/:id", LivroController.GetLivroById);
routes.post("/livros", LivroController.PostLivros);
routes.put("/livros/:id", LivroController.UpdateLivro);
routes.delete("/livros/:id", LivroController.DeleteLivro);

export default routes;