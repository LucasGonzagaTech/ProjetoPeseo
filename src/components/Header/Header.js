import React from "react";
import logo from '../../img/logo.png';
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { faUser, faBars  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';

const Header = () => {
    
    return (
        <Navbar className="divContainer2" sticky="top" fixed="top" expand="lg">
            <Container>
                <Navbar.Brand href="/" className="me-auto">
                    <img src={logo} alt="Logo" fluid />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="como-funciona" className="custom_nav_link">Como a plataforma funciona</Nav.Link>
                        <Nav.Link href="sobre" className="custom_nav_link">Quem somos</Nav.Link>
                        <Nav.Link className="hide-on-mobile">|</Nav.Link>
                        <Nav.Link href="login" className="custom_nav_link">Entrar</Nav.Link>
                    </Nav>
                    <Button className="button-Accouny" variant="primary" href="cadastro">
                        <FontAwesomeIcon icon={faUser} /> Criar Conta
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;