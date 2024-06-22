--- drop database dbPeseo;

create database dbPeseo;

use dbPeseo;

create table tbUsuarios(
    idUsuario int not null auto_increment,
    nome varchar(100) not null,
    email varchar(100) not null,
    tel varchar(11) not null,
    senha VARCHAR(255) NOT NULL, 
    primary key(idUsuario)
);

create table tbTutores(
    idTutor int not null auto_increment,
    idUsuario int not null,
    nome varchar(100) not null,
    cpf varchar(15) not null,
    anoDeInicioCurso date not null,
    anoDeConclusaoCurso date not null,
    -- declaracaoFacul blob,
    primary key (idTutor),
    foreign key (idUsuario) references tbUsuarios(idUsuario)
);


create table tbDisciplinas(
    idDisciplina int not null auto_increment,
    idTutor int not null,
    nomeTutor varchar(30) not null,
    materia varchar(50) not null,
    -- duracao time not null,
    -- capa blob,
    -- pdf blob,
    descricao varchar(250),
    primary key (idDisciplina),
    foreign key (idTutor) references tbTutores(idTutor)
);

create table tbMaterias(
    idMateria int not null auto_increment,
    idDisciplina int not null,
    nome varchar(50),
    primary key(idMateria),
    foreign key (idDisciplina) references tbDisciplinas(idDisciplina)
);

create table tbAulasPendentes(
    idAulaPendente int not null auto_increment,
    idTutor int not null,
    primary key(idAulaPendente),
    foreign key(idTutor) references tbTutores(idTutor)
);

create table tbAdms(
    idAdm int not null auto_increment,
    nome varchar(30),
    idAulaPendente int not null,
    primary key(idAdm),
    foreign key(idAulaPendente) references tbAulasPendentes(idAulaPendente)
);
create table tbAulas(
    idAula int not null auto_increment,
    idAdm int not null,
    idMateria int not null,
    idDisciplina int not null,
    idTutor int not null,
    nomeAula varchar(100) not null,
    nomeTutor varchar(100) not null,
    primary key(idAula),
    foreign key(idMateria) references tbMaterias(idMateria),
    foreign key(idAdm) references tbAdms(idAdm)
);



show tables;

desc tbUsuarios;

desc tbMaterias;

desc tbTutores;

desc tbDisciplinas;

desc tbAulas;

desc tbAulasPendentes;

desc tbAdms;

--Inserts

--tbUsuarios
INSERT into tbUsuarios (nome, email, tel) VALUES ('Teste', 'Teste@teste.com', 11123456789);


--tbTutores
INSERT into tbTutores (idUsuario, nome, cpf, anoDeInicioCurso, anoDeConclusaoCurso) VALUES (1,'Teste','123456785-78','2015-12-17','2016-12-17');



