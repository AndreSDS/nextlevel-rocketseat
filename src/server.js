//importando express
const express = require("express");
const server = express();
//importando nunjucks
const nunjucks = require('nunjucks');

//configurar a pasta public
server.use(express.static("public"));

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

server.get("/search", (req, res) => {
    return res.render("search-results.html");
});

server.listen(3000);