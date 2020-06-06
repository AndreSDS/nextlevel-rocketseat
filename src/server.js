//importando express
const express = require("express");
const server = express();
//importando nunjucks
const nunjucks = require('nunjucks');
//importando db
const db = require('./database/db');

//configurar a pasta public
server.use(express.static("public"));
//habilitar o req.body
server.use(express.urlencoded({ extended: true }));

//utilizando o nunjucks
nunjucks.configure("src/views", {
    express: server,
    noCache: true
});

server.get("/", (req, res) => {
    return res.render("index.html");
});

server.get("/create-point", (req, res) => {
    return res.render("create-point.html");
});

server.post('/savepoint', (req,res)=>{
    //req.body = contendo informações do form
    //inserir dados no banco
    const query = `
     INSERT INTO places(
         image,
         name,
         address,
         address2,
         state,
         city,
         items
       ) VALUES ( ?,?,?,?,?,?,? );
     `;
   const values = [
       req.body.image,
       req.body.name,
       req.body.address,
       req.body.address2,
       req.body.state,
       req.body.city,
       req.body.items
   ];
   //callback de erro
   function afterInsertData(err) {
        if(err){return console.log(err)};
        console.log("Cadastrado com sucesso");
        res.render("/", { saved: true });
    }
    //cadastrando ponto
    db.run(query, values, afterInsertData);
});

server.get("/search-all", (req, res) => {
    db.all(`SELECT * FROM places`, (err, rows) => {
        const total = rows.length;
        return err? console.log(err) : res.render("search-results.html", { places: rows, total: total });
    });
});

server.get("/search", (req, res) => {

    const search = req.query.search;
    if(search == ''){
        //pesquisa vazia
        return res.render("search-results.html", { total: 0 });
    }
    //listando pontos pos cidade
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, (err, rows) => {
        
        const total = rows.length;
        return err? console.log(err) : res.render("search-results.html", { places: rows, total: total });
    });
});

server.listen(3000);