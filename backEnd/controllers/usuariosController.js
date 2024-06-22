const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const dbConecta = require ('../models/dbConexao');


//GET
router.get('/', (req, res) =>{
    dbConecta.query('SELECT * FROM tbUsuarios', (err, result) =>{
        if(err) throw err;
        res.json(result)
    })
});

//POST
router.post('/', async (req, res) =>{
    const {idUsuario, nome, email, tel, senha} = req.body;
    const hash = await bcrypt.hash(senha, 10);
    const query = 'INSERT INTO tbusuarios (idUsuario, nome, email, tel, senha) VALUES (?,?,?,?,?)';

    dbConecta.query( query, [idUsuario, nome, email, tel, hash], (err, result) =>{
        if(err) {
            res.status(500).json({message: 'Erro ao adicionar usuário.'});

        }else {
            res.status(201).json({
                message: 'Usuario adicionado!',
                idUsuario: result.insertId,
                body: req.body
            });
        }
    });
    
});

//DELETE
router.delete('/:id', (req, res) =>{
    const {id} = req.params;
    const query = `DELETE FROM tbusuarios WHERE idUsuario = ?`;

    dbConecta.query(query, [id], (err, result) =>{
        if(err) {
            res.status(500).json({message: 'Erro ao deletar usuario'});
        } else {
            res.status(201).json({
                message: `Usuario de id ${id}, deletado com sucesso!`
            });
        }
    });
});

//PUT / UPDATE

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {nome,email,tel} = req.body;
    const queryn = `UPDATE tbusuarios SET nome = ?, email = ?, tel = ? WHERE idUsuario = ?`

    dbConecta.query(queryn, [nome,email,tel,id], (err, result)=>{
        if (err) {
            res.status(500).json({message: 'Erro ao alterar informação do usuário.'});
        } else {
            res.status(201).json({
                message: `Alteração aplicada`,
                envio:{
                    id: id,
                    nome: nome,
                    email: email,
                    tel: tel,
                }
            })
        }
    })
});


// Autenticação de login
router.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const query = 'SELECT * FROM tbusuarios WHERE email = ?';

    dbConecta.query(query, [email], async (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Erro ao autenticar usuário.' });
        } else if (result.length === 0) {
            res.status(401).json({ message: 'Usuário não encontrado.' });
        } else {
            const user = result[0];
            const match = await bcrypt.compare(senha, user.senha);
            if (match) {
                res.status(200).json({ message: 'Autenticado com sucesso!', userId: user.idUsuario });
            } else {
                res.status(401).json({ message: 'Senha incorreta.' });
            }
        }
    });
});

module.exports = router;