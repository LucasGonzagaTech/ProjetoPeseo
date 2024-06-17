const express = require('express');
const router = express.Router();
const dbConecta = require ('../models/dbConexao');


//GET
router.get('/', (req, res) =>{
    dbConecta.query('SELECT * FROM tbDisciplinas', (err, result) =>{
        if(err) throw err;
        res.json(result)
    })
});

//POST
router.post('/', (req, res) =>{
    const {idDisciplina, idTutor, nomeTutor, materia, duracao, descricao} = req.body;
    const query = 'INSERT INTO tbDisciplinas (idDisciplina, idTutor, nomeTutor, materia, descricao) VALUES (?,?,?,?,?)';

    dbConecta.query( query, [idDisciplina, idTutor, nomeTutor, materia, duracao, descricao], (err, result) =>{
        if(err) {
            res.status(500).json({message: 'Erro ao adicionar disciplina.'});

        }else {
            res.status(201).json({
                message: 'Usuario adicionado!',
                idAdm: result.insertId,
                body: req.body
            });
        }
    });
});

//DELETE
router.delete('/:id', (req, res) =>{
    const {id} = req.params;
    const query = `DELETE FROM tbDisciplinas WHERE idDisciplina = ?`;

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
    const {idTutor, nomeTutor, materia, descricao} = req.body;
    const queryn = `UPDATE tbDisciplinas SET idTutor = ?, nomeTutor = ?,materia = ?, disciplina = ? WHERE idDisciplina = ?`

    dbConecta.query(queryn, [idTutor, nomeTutor, materia, descricao,id], (err, result)=>{
        if (err) {
            res.status(500).json({message: 'Erro ao alterar informação do usuário.'});
        } else {
            res.status(201).json({
                message: `Alteração aplicada`,
                envio:{
                    id: id,
                    idTutor: idTutor,
                    nomeTutor: nomeTutor,
                    materia: materia,
                    descricao: descricao,
                }
            })
        }
    })
});

module.exports = router;