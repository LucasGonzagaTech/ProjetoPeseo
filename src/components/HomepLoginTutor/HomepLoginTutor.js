import React from "react";
import Nav from 'react-bootstrap/Nav';
import img from "../../img/uploadVideo.png"
import Header from "../Header/Header"
import "./HomepLoginTutor.css"
import { Button } from "react-bootstrap";

export default ()=>{

    return(
        <>
        <Header/>
        <div className="containerPostarAula">
            <div className="right">
            <img src={img} style={{width:"100px", height:"100px"}}/>
                 <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Meus itens</Nav.Link>
      <Nav.Link eventKey="link-1">Meu Painel</Nav.Link>
      <Nav.Link eventKey="link-2">Conteúdo</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Minha conta
      </Nav.Link>
      <Nav.Link eventKey="link-2">Editar Perfil</Nav.Link>
    </Nav>
            </div>
            
<div className="left">
    <h1>Olá (nome do tutor)</h1>
    <h2>Meu painel</h2>

        <div className="postaAula">
        <img src={img}/>
        <p>Anexe sua aula</p>
        <Button variant="outline-primary">Enviar aula</Button>{' '}

        </div>
</div>
    
        </div>
       
        </>
    )
}