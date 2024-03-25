import React from "react";
import logo from '../../img/logo.png';
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';

const HeaderLogin = () => {

    return (
        <Navbar className="divContainer" sticky="top" fixed="top" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="me-auto">
                    <img src={logo} alt="Logo" fluid />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className=" mr-sm-2"
                        />
                        <Nav.Link href="#QuemSomos" className="custom_nav_link">Inicio</Nav.Link>
                        <Nav.Link href="#Entrar" className="custom_nav_link">Comunidade</Nav.Link>
                    </Nav>
                    <Button className="button-Accouny" variant="primary">
                        <FontAwesomeIcon icon={faUser} /> Criar Conta
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderLogin;
