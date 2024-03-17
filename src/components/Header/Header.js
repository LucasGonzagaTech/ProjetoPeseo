import React from "react"
import logo from '../../img/logo.png'
import { Row, Col, Container, Nav, Navbar, Button } from "react-bootstrap";
import style from './header.module.css'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => {
    return (
        <Navbar  fixed="top" expand="lg" className={style.contNav}>
            <Container >

                <Row>
                    <Col>
                        <Navbar.Brand href="#home">
                            <img src={logo} alt="Logo" fluit />
                        </Navbar.Brand> 
                    </Col>
                    </Row>

                    <Row>
                    <Col>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#Trilhas"  className={style.custom_nav_link}>Trilhas</Nav.Link>
                                <Nav.Link href="#Quem somos" className={style.custom_nav_link}>Quem somos</Nav.Link>
                                <Nav.Link  className={style.custom_nav_link}>|</Nav.Link>
                                <Nav.Link href="#Entrar" className={style.custom_nav_link}>Entrar</Nav.Link>
                            </Nav>
                            <Button variant="primary" className={ style.btnAccouny }> 
                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Criar Conta
                            </Button>
                        </Navbar.Collapse>
                    </Col>
                </Row>

            </Container>
        </Navbar>
    );
}

export default Header;
