const express = require('express');
const router = express.Router();
const dbConecta = require ('../models/dbConexao');


//GET
router.get('/', (req, res) =>{
    dbConecta.query('SELECT * FROM tbAulas', (err, result) =>{
        if(err) throw err;
        res.json(result)
    })
});

//POST
router.post('/', (req, res) =>{
    const {idAula, idAdm, idMateria, idDisciplina, idTutor, nomeAula, nomeTutor} = req.body;
    const query = 'INSERT INTO tbAulas (idAula, idAdm, idMateria, idDisciplina, idTutor, nomeAula, nomeTutor) VALUES (?,?,?,?,?,?,?)';

    dbConecta.query( query, [idAula, idAdm, idMateria, idDisciplina, idTutor, nomeAula, nomeTutor], (err, result) =>{
        if(err) {
            res.status(500).json({message: 'Erro ao adicionar usuário.'});

        }else {
            res.status(201).json({
                message: 'Usuario adicionado!',
                idAula: result.insertId,
                body: req.body
            });
        }
    });
});

//DELETE
router.delete('/:id', (req, res) =>{
    const {id} = req.params;
    const query = `DELETE FROM tbAulas WHERE idAula = ?`;

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
    const {idAula, idAdm, idMateria, idDisciplina, idTutor, nomeAula, nomeTutor} = req.body;
    const queryn = `UPDATE tbAulas SET idAdm=?, idMateria=?, idDisciplina=?, idTutor=?, nomeAula=?, nomeTutor=? WHERE idAula = ?`

    dbConecta.query(queryn, [idAula, idAdm, idMateria, idDisciplina, idTutor, nomeAula, nomeTutor], (err, result)=>{
        if (err) {
            res.status(500).json({message: 'Erro ao alterar informação do usuário.'});
        } else {
            res.status(201).json({
                message: `Alteração aplicada`,
                envio:{
                id: id,
                idAdm: idAdm,
                idMateria: idMateria,
                idDisciplina: idDisciplina,
                idTutor: idTutor,
                nomeAula: nomeAula,
                nomeTutor: nomeTutor
                }
            })
        }
    })
});

module.exports = router;