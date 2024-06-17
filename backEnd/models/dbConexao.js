//Import módulo do mysql
const mysql = require('mysql');

//Conexão do banco
const conexao = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database: 'dbPeseo'
})

conexao.connect((err) =>{
    if(err){
        console.log("Erro ao conectar com o banco: ", err);
        reject(err);
        return;
    }
    console.log('Banco conectado');
});

//Export da conexão do banco
module.exports = conexao;