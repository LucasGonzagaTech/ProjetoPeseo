import React from "react";
import logo from '../../img/logo.png';
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { faUser, faCircleUser  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './headerLogin.css';

const Header = () => {
    
    return (
        <Navbar className="divContainer2" sticky="top" fixed="top" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="me-auto">
                    <img src={logo} alt="Logo" fluid />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#Trilhas" className="custom_nav_link">Inicio</Nav.Link>
                        <Nav.Link href="#QuemSomos" className="custom_nav_link">comunidade</Nav.Link>
                        <Nav.Link className="hide-on-mobile">|</Nav.Link>
                        <Nav.Link className="UserEdit">
                            <FontAwesomeIcon icon={faCircleUser} className="UserPhoto"/>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;