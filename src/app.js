import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDataBase();

await conexao.on("error", (err) =>{
    console.error("Error: ", err);
});

await conexao.once("open", () => {
    console.log("Connection succeeded");
});

const app = express();
routes(app);


export default app;

