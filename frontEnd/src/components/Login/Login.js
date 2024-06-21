import React, {useState} from 'react';
import axios from 'axios';
import './Login.css'
import Header from '../Header/Header';
import { Container } from 'react-bootstrap';
import Google from '../../img/Googlelogin.png';
import Linha from '../../img/Separator.png';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha })
        });

        const data = await response.json();
        if (response.ok) {
            // Sucesso, redirecionar ou armazenar dados no localStorage
            console.log(data.message);
        } else {
            // Exibir erro
            console.log(data.message);
        }
    };

    //     try {
    //         const response = await axios.post('http://localhost:3000/usuarios', {
    //             email: email,
    //             senha: senha
    //         });

    //         console.log('Resposta do login:', response.data);

    //         // Aqui você pode adicionar lógica para redirecionar o usuário para a página de dashboard, por exemplo
    //         // window.location.href = '/dashboard';
    //         // ou usar um componente de roteamento como o react-router-dom

    //     } catch (error) {
    //         console.error('Erro no login:', error);
    //         alert('Erro ao fazer login');
    //     }
    // };
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