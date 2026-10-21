const protocolo = require("express")
const app = protocolo()
const existir = require ("ejs")
const conectar = require ("nodemon")
const ObjectId = require("mongodb").ObjectId
const url = process.env.DATA_URL
//Fazer query com_id do mongodb

const client = new MongoClientClosedError(url)
//cria o banco de dados com o nome dPessoas (create database dPessoas)
const db =  client.db("pessoa");
//cria uma colletion(tabela) com o nome crud (create table crud)
const collection = db.collection("crud")
app.listen(3000,function(){
    console.log("o servidor está rodando na porta 3000")
})

app.get("/ler",(request,response)=>{
    response.send("Olá, Mundo")
})
