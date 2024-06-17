const express = require('express');
const router = express.Router();
const dbConecta = require ('../models/dbConexao');


//GET
router.get('/', (req, res) =>{
    dbConecta.query('SELECT * FROM tbTutores', (err, result) =>{
        if(err) throw err;
        res.json(result)
    })
});

//POST
router.post('/', (req, res) =>{
    const {idTutor, idUsuario, nome, cpf, anoDeInicioCurso, anoDeConclusaoCurso} = req.body;
    const query = 'INSERT INTO tbTutores (idTutor, idUsuario, nome, cpf, anoDeInicioCurso, anoDeConclusaoCurso) VALUES (?,?,?,?,?,?)';

    dbConecta.query( query, [idTutor, idUsuario, nome, cpf, anoDeInicioCurso, anoDeConclusaoCurso], (err, result) =>{
        if(err) {
            res.status(500).json({message: 'Erro ao adicionar tutor.'});

        }else {
            res.status(201).json({
                message: 'Tutor adicionado!',
                idAdm: result.insertId,
                body: req.body
            });
        }
    });
});

//DELETE
router.delete('/:id', (req, res) =>{
    const {id} = req.params;
    const query = `DELETE FROM tbTutores WHERE idTutor = ?`;

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
    const {idUsuario, nome, cpf, anoDeInicioCurso, anoDeConclusaoCurso} = req.body;
    const queryn = `UPDATE tbTutores SET nome = ?, idAulaPendente = ? WHERE idAdm = ?`

    dbConecta.query(queryn, [idUsuario, nome, cpf, anoDeInicioCurso, anoDeConclusaoCurso,id], (err, result)=>{
        if (err) {
            res.status(500).json({message: 'Erro ao alterar informação do usuário.'});
        } else {
            res.status(201).json({
                message: `Alteração aplicada`,
                envio:{
                    id: id,
                    idUsuario: idUsuario,
                    nome: nome,
                    cpf: cpf,
                    anoDeInicioCurso: anoDeInicioCurso,
                    anoDeConclusaoCurso: anoDeConclusaoCurso
                }
            })
        }
    })
});

module.exports = router;