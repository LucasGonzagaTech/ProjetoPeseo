import React from "react";
import { Link } from "react-router-dom";
import logo from '../../img/logo.png';
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { faUser, faBars  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';
import Login from "../Login/Login";

const Header = () => {


    return (
        <Navbar className="divContainer" sticky="top" fixed="top" expand="lg">
            <Container>
            
                <Navbar.Brand href="#home" className="me-auto">
                   <Link to={"/"}><img src={logo} alt="Logo" fluid /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="" className="custom_nav_link">Como a Plataforma Funciona</Nav.Link>
                        <Nav.Link href="#QuemSomos" className="custom_nav_link">Quem somos</Nav.Link>
                        <Nav.Link className="hide-on-mobile">|</Nav.Link>
                        <Nav.Link href="#Entrar" className="custom_nav_link">Entrar</Nav.Link>
                    </Nav>
                    <Button className="button-Accouny" variant="primary">
                       <Link to={"/cadastro"}> <FontAwesomeIcon icon={faUser} /> Criar Conta </Link> 
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;