import express, { Router } from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autores", AutorController.GetAutores);
routes.get("/autores/:id", AutorController.GetAutoresById);
routes.post("/autores", AutorController.CreateAutor);
routes.put("/autores/:id", AutorController.UpdateAutor);
routes.delete("/autores/:id", AutorController.DeleteAutor);

export default routes;