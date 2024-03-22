import React from "react";
import './postarAula.css'
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Header from "../Header/Header";


export default () => {

    return (
        <>
        <Header/> 
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Voltar para o meu painel</Nav.Link>
                <Nav.Link eventKey="link-1">Criação da aula</Nav.Link>
                <Nav.Link eventKey="link-2">Detalhes</Nav.Link>
                <Nav.Link eventKey="link-3">
                    Enviar para análise
                </Nav.Link>
            </Nav>
            <h1>Detalhes</h1>

            <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
        </>
    )
}