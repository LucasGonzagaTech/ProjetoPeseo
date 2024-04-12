import React from 'react';
import './Login.css'
import Header from '../Header/Header';
import { Container } from 'react-bootstrap';
import Google from '../../img/Googlelogin.png';
import Linha from '../../img/Separator.png';

function Login() {
    return (
        <main>
            <Header />
            <Container className='containerLogin'>
                <section className='login'>
                    <form className='login2'>
                        <h1 className='facaLogin'>Faça Login na PESEO</h1>

                        <a href='#'><img src={Google} alt="Continuar com o google" /></a>

                        <img src={Linha} alt='Linha separadora' className='linha'/>

                        <div className='mail'>
                            <label className='label'>E-mail</label>
                            <input className='borda' type='email' placeholder='Insira seu e-mail' required></input>
                        </div>

                        <div className='Senha'>
                            <label className='label2'>Senha</label>
                            <input className='borda' type='password' placeholder='Insira sua senha' required></input>
                        </div>

                        <button className='contiMail'>Continuar com e-mail</button>

                        <div>
                            <p className='paragrafo'>Esqueceu sua senha? <a href='#'>Altere agora</a></p>
                            <p className='paragrafo'>Não tem cadastro?<a href='#'>Cadastre-se</a></p>
                        </div>
                    </form>
                </section>
            </Container>
        </main>

    )
}

export default Login;