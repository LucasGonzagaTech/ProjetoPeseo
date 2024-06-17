import React from "react";
import './postarAula.css'
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Header from "../Header/Header";
import Button from 'react-bootstrap/Button';

export default () => {

    return (
        <>
        <Header/>
        <div className="postarAula">
          <div className="leftPostarAula">
          <Nav defaultActiveKey="/home" className="flex-column">
          <Button variant="outline-primary">Voltar ao Menu</Button>{' '}
                <h6>Criação da aula</h6>
                <Nav.Link eventKey="link-2">Detalhes</Nav.Link>
                <Button variant="outline-primary">Enviar para análise</Button>{' '}
            </Nav>
        </div>
            
            <div className="rightPostarAula">
              <h1 style={{color:"blue"}}>Detalhes</h1>
<div className="outline"></div>
            <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Título da aula</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Descrição</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Form.Select aria-label="Default select example">
      <option>Selecione a matéria</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    </Form>
    <h3 className="h1PostarAula">Imagem da aula</h3>
<div className="putAula">

      <div className="inputImagem">
        <p style={{textAlign:"center"}}>Selecione ou arraste a aula</p>
      </div>
      <div className="infoUpload">
        <p className="txtUpload">Faça o upload da imagem do seu curso aqui. 
        Ela deve atender aos nossos padrões de qualidade 
        da imagem do curso para ser aceita. Diretrizes importantes: 
        ter 750 x 422 pixels, estar no formato .jpg, .jpeg,. gif ou 
        .png. e não ter nenhum texto na imagem.</p>
        <Button variant="outline-secondary">Selecione o arquivo</Button>{' '}
      </div>
      
</div>
            </div>
        </div>
        
            
        </>
    )
}