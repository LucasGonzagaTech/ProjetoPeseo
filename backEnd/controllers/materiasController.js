const express = require('express');
const router = express.Router();
const dbConecta = require ('../models/dbConexao');


//GET
router.get('/', (req, res) =>{
    dbConecta.query('SELECT * FROM tbMaterias', (err, result) =>{
        if(err) throw err;
        res.json(result)
    })
});

//POST
router.post('/', (req, res) =>{
    const {idMateria,idDisciplina,nome} = req.body;
    const query = 'INSERT INTO tbMaterias (idMateria, idDisciplina, nome) VALUES (?,?,?)';

    dbConecta.query( query, [idMateria, idDisciplina, nome], (err, result) =>{
        if(err) {
            res.status(500).json({message: 'Erro ao adicionar matéria.'});

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
    const query = `DELETE FROM tbMaterias WHERE idMateria = ?`;

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
    const {nome, idDisciplina} = req.body;
    const queryn = `UPDATE tbMaterias SET idDisciplina = ?, nome = ? WHERE idAdm = ?`

    dbConecta.query(queryn, [nome,idAulaPendente,id], (err, result)=>{
        if (err) {
            res.status(500).json({message: 'Erro ao alterar informação do usuário.'});
        } else {
            res.status(201).json({
                message: `Alteração aplicada`,
                envio:{
                    id: id,
                    idDisciplina: idDisciplina,
                    nome: nome
                    
                }
            })
        }
    })
});

module.exports = router;