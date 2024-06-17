import React from 'react';
import Header from '../Header/Header';
import './cadastro.css'
import { Container } from 'react-bootstrap';
import Google from '../../img/Googlelogin.png';
import Linha from '../../img/Separator.png';


function Cadastro() {
    return (
        <main>
            <Header />
            <Container className='container1'>
                <section className='section'>
                    <form className='cadastro'>
                        <h1 className='criaConta'>Crie uma conta</h1>

                        <a href='#'>  <img src={Google} alt='Continuar com o google' /> </a>

                        <img src={Linha} alt='Linha separadora' className='linha'/>

                        <div className='nome'>
                            <label>Nome</label>
                            <input className='input' type='text' placeholder='Insira seu nome completo' required ></input>

                        </div>
                        <div className='email'>
                            <label className='paragrafo1'>E-mail</label>
                            <input className='input' type='email' placeholder='Insira seu email' required></input>
                        </div>

                        <div className='numTel'>
                            <label>Telefone</label>
                            <input className='input' type='tel' placeholder='(11) 9999-9999' required></input>
                        </div>

                        <div className='senha'>
                            <label>Senha</label>
                            <input className='input' type='password' placeholder='Insira sua senha' required></input>
                        </div>

                        <div className='confirmaSenha'>
                            <label>Confirmar senha</label>
                            <input className='input' type='password' placeholder='Confirme sua senha' required></input>
                        </div>

                        <button className='contEmail'>Continuar com e-mail</button>

                        <div className='Login'>
                            <p>Ja tem cadastro? <a href='login'>Login</a></p>
                        </div>
                    </form>
                </section>
            </Container>
        </main>

    )
}

export default Cadastro;