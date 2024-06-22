import React, {useState} from 'react';
import axios from 'axios';
import './Login.css'
import Header from '../Header/Header';
import { Container } from 'react-bootstrap';
import Google from '../../img/Googlelogin.png';
import Linha from '../../img/Separator.png';

import { Navigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [redirect, setRedirect] = useState(false); // Estado para controlar o redirecionamento

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/usuarios/login', {
                email,
                senha
            });

            if (response.status === 200) {
                setRedirect(true); // Redirecionar em caso de sucesso
            } else {
                console.log('Erro no login:', response.data.message);
            }
        } catch (error) {
            console.error('Erro no login:', error);
            alert('Erro ao fazer login');
        }
    };

    if (redirect) {
        return <Navigate to="/catalogo" />; // Redireciona para a página de dashboard após o login
    }

    return (
        <main>

            <Header />
            <Container className='containerLogin'>
                <section className='login' onSubmit={handleLogin}>
                    <form className='login2'>
                        <h1 className='facaLogin'>Faça Login na PESEO</h1>

                        <a href='#'><img src={Google} alt="Continuar com o google" /></a>

                        <img src={Linha} alt='Linha separadora' className='linha' />

                        <div className='mail'>
                            <label className='label'>E-mail</label>
                            <input className='borda' type='email' placeholder='Insira seu e-mail' required
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className='Senha'>
                            <label className='label2'>Senha</label>
                            <input className='borda' type='password' placeholder='Insira sua senha' required
                                value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </div>

                        <button className='contiMail' type='submit'>Continuar com e-mail</button>

                        <div>
                            <p className='paragrafo'>Esqueceu sua senha? <a href='#'>Altere agora</a></p>
                            <p className='paragrafo'>Não tem cadastro?<a href='cadastro'>Cadastre-se</a></p>
                        </div>
                    </form>
                </section>
            </Container>
        </main>

    )
}

export default Login;