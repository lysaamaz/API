const protocolo = require("express")
const app = protocolo()
const existir = require ("ejs")
const conectar = require ("nodemon")


app.listen(3000,function(){
    console.log("o servidor está rodando na porta 3000")
})

app.get("/ler",(request,response)=>{
    response.send("Olá, Mundo")
})
