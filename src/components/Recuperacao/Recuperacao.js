import React from 'react';
import './recuperacao.css';
import Header from '../Header/Header';
import { Container } from 'react-bootstrap';
 
function Recuperacao() {
    return(
        <main>
            <Header/>
            <Container className='containerRecuperacao'>
            <section className='recuperacao'>
                <form className='form'>
                     <h1 className='h1'>Recuperação da Conta</h1>
 
                     <div className='email'>
                        <label>E-mail</label>
                        <input className='borda2' type='email' placeholder='Insira seu e-mail' required></input>
                     </div>
 
                     <button className='envioCodigo'>Enviar código para e-mail</button>
                <p className='voltar'><a href='#'>voltar</a></p>
                </form>
            </section>
            </Container> 
        </main>
    )
}
 
export default Recuperacao;