//importar sqlite3
const sqlite3 = require("sqlite3").verbose();
//criar o objeto com as operações do banco
const db = new sqlite3.Database("./src/database/database.db");
//usando o db para  fazer as operações
db.serialize(() => {
//   //comandos sql para:

//   //1-criar tabela
//   db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `);

//   //2-inserir dados
//    const query = `
//      INSERT INTO places(
//          image,
//          name,
//          address,
//          address2,
//          state,
//          city,
//          items
//        ) VALUES ( ?,?,?,?,?,?,? );
//      `;
//    const values = [
//      "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//      "Paperdider",
//      "Rua Guilherme Gemballa, Jardim América",
//      "Número 260",
//      "Santa Catarina",
//      "Rio do Sul",
//      "Papéis e Papelão",
//    ];
//    //callback de erro
//    function afterInsertData(err) {
//      console.log(this);
//      return err ? console.log(err) : console.log("Cadastrado com sucesso");
//    }
//   db.run(query, values, afterInsertData);

//   //3-consultar dados
//   db.all(` SELECT * FROM places`, function(err, rows){  
//     return err ? console.log(err) : console.log(rows);
//   });

//   //4-deletar um dado
//   db.run(`DELETE FROM places WHERE id = ?`,[15], err => err? console.log(err) : console.log("Deletado com sucesso"));

});

module.exports = db;