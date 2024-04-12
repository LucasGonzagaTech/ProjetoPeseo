import React from "react";
import './CodigoRecuperacao.css';
import Linha from '../../img/Separator.png';
import Ok from '../../img/okRecuperacao.png';
import Header from '../Header/Header';
import { Container } from 'react-bootstrap';


function CodigoRecuperacao(){
    return(
        <main>
        <Header/>
        <Container className='containercodigo'>
        <section className='recuperacao2'>
            <form className='form'>
                 <h1 className='texto'>Código de recuperação enviado com sucesso!</h1>
        
                 <img src={Linha}/>
 
                 <div id="divrecuperacao">
                    <img src={Ok} alt="Ok" className="imagemOk"/>
                    <p className="p">Verifique seu e-mail</p>
                 </div>

             <button className='envio'>Voltar ao Login</button>
               
            </form>
        </section>
        </Container> 
    </main> 
    )
}

export default CodigoRecuperacao;