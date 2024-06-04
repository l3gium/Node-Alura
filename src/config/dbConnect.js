import mongoose, { mongo } from "mongoose";

async function conectaNaDataBase(){
    mongoose.connect("mongodb+srv://l3gium:5UEvGc0SG3pkhMTC@cluster.ahgrcqg.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster");

    return mongoose.connection;
}

export default conectaNaDataBase