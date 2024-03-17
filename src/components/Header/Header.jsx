import React from "react"
import logo from '../../Image/logo.png'
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import './header.css'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => {
    return (
        <Navbar  fixed="top" expand="lg">
            <Container >

                        <Navbar.Brand href="#home" className="me-auto">
                            <img src={logo} alt="Logo" fluit />
                        </Navbar.Brand> 

                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#Trilhas"  >Trilhas</Nav.Link>
                                <Nav.Link href="#Quem somos" >Quem somos</Nav.Link>
                                <Nav.Link  >|</Nav.Link>
                                <Nav.Link href="#Entrar" >Entrar</Nav.Link>
                            </Nav>
                            <Button variant="primary"> 
                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Criar Conta
                            </Button>
                        </Navbar.Collapse>


            </Container>
        </Navbar>
    );
}

export default Header;