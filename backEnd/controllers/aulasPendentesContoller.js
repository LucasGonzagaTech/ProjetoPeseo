const express = require('express');
const router = express.Router();
const dbConecta = require ('../models/dbConexao');


//GET
router.get('/', (req, res) =>{
    dbConecta.query('SELECT * FROM tbAulasPendentes', (err, result) =>{
        if(err) throw err;
        res.json(result)
    })
});

//POST
router.post('/', (req, res) =>{
    const {idAulaPendente, idTutor} = req.body;
    const query = 'INSERT INTO tbAulasPendentes (idAulaPendente, idTutor) VALUES (?,?)';

    dbConecta.query( query, [idAulaPendente, idTutor], (err, result) =>{
        if(err) {
            res.status(500).json({message: 'Erro ao adicionar AulaPendente.'});

        }else {
            res.status(201).json({
                message: 'Usuario adicionado!',
                idAulaPendente: result.insertId,
                body: req.body
            });
        }
    });
});

//DELETE
router.delete('/:id', (req, res) =>{
    const {id} = req.params;
    const query = `DELETE FROM tbAulasPendentes WHERE idAulaPendente = ?`;

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
    const {idTutor} = req.body;
    const queryn = `UPDATE tbAulasPendentes SET idTutor = ? WHERE idAulaPendente = ?`

    dbConecta.query(queryn, [idTutor], (err, result)=>{
        if (err) {
            res.status(500).json({message: 'Erro ao alterar informação do usuário.'});
        } else {
            res.status(201).json({
                message: `Alteração aplicada`,
                envio:{
                    id: id,
                    idTutor: idTutor
                    
                }
            })
        }
    })
});

module.exports = router;