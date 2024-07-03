import React from "react";
import { Button, Container } from "react-bootstrap";

// Image
import Logo from '../../img/LogoFooter.png'
import linkedin from '../../img/linfk.png'
import insta from '../../img/insta.png'
import face from '../../img/face.png'
import twitter from '../../img/x.png'

// CSS
import "./footer.css"

const Footer = () => {
    return (
        <>
            <div className="class-conteiner">
                <div className="class-footerLinks">

                    <div className="column_Duvida">
                        <p className="FontTitle">Duvida?</p>
                        <Button>Fale conosco</Button>
                    </div>

                    <div className="column_Trilhas">
                        <p className="FontTitle">Trilhas</p>
                        <p className="FontPadrao">Matemática</p>
                        <p className="FontPadrao">Linguagens</p>
                        <p className="FontPadrao">Ciencias da natureza</p>
                        <p className="FontPadrao">Ciencias humanas</p>
                    </div>

                    <div className="column_Sobre">
                        <p className="FontTitle">Sobre</p>
                        <p className="FontPadrao">Politica de privacidade</p>
                        <p className="FontPadrao">Termos de uso</p>
                        <p className="FontPadrao">Direitos autorais</p>
                    </div>

                    <div className="column_Suporte">
                        <p className="FontTitle">Suporte</p>
                        <p className="FontPadrao">Central de ajuda</p>
                        <a href="peseopj@outlook.com">peseopj@outlook.com</a>
                    </div>

                </div>

                <div className="column_BarraInferior">
                    <img src={Logo} alt="Logo" />

                    <div className="column_social">
                        <img src={linkedin} alt="Logo" />
                        <img src={insta} alt="Logo" />
                        <img src={face} alt="Logo" />
                        <img src={twitter} alt="Logo" />
                    </div>

                </div>

                <div className="column_Copyright">
                    <p>Copyright © 2024 PESEO</p>
                    <p>Queremos seu feedback!</p>
                </div>

            </div>
        </>
    )
}

export default Footer;