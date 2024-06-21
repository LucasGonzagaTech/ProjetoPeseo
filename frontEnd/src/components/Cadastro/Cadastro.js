import react, { useState, useEffect } from 'react';
import api from '../../services/Api';
import { Redirect } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import Header from '../Header/Header';
import './cadastro.css'
import { Container } from 'react-bootstrap';
import Google from '../../img/Googlelogin.png';
import Linha from '../../img/Separator.png';

function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [redirect, setRedirect] = useState(false); // Estado para controlar o redirecionamento

//Limpa os inputs
    const clear = () => {
        setNome('');
        setEmail('');
        setTel('');
        setSenha('');
        setConfirmarSenha('');
    };

    const handleCadastro = async (event) => {
        event.preventDefault();

        // Verifica se as senhas coincidem
        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/usuarios/', {
                nome: nome,
                email: email,
                tel: tel,
                senha: senha // Você pode modificar para enviar apenas os dados necessários
            });

            console.log('Usuário cadastrado:', response.data);
            // Lógica para redirecionar para página de sucesso, login, ou outra ação necessária após o cadastro

            clear();

            setRedirect(true);

        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            alert('Erro ao cadastrar usuário');
        }
    };

    if (redirect) {
        return <Navigate to='/login' />; // Redireciona para a página de sucesso após o cadastro
    }

    return (
        <main>
            <Header />
            <Container className='container1'>
                <section className='section'>
                    <form className='cadastro' onSubmit={handleCadastro}>
                        <h1 className='criaConta'>Crie uma conta</h1>

                        <a href='#'>  <img src={Google} alt='Continuar com o google' /> </a>

                        <img src={Linha} alt='Linha separadora' className='linha' />

                        <div className='nome'>
                            <label>Nome</label>
                            <input className='input' type='text' placeholder='Insira seu nome completo' required value={nome} onChange={(e) => setNome(e.target.value)} ></input>

                        </div>
                        <div className='email'>
                            <label className='paragrafo1'>E-mail</label>
                            <input className='input' type='email' placeholder='Insira seu email' required value={email} onChange={(e) => setEmail(e.target.value)} ></input>
                        </div>

                        <div className='numTel'>
                            <label>Telefone</label>
                            <input className='input' type='tel' placeholder='(11) 9999-9999' required value={tel} onChange={(e) => setTel(e.target.value)} ></input>
                        </div>

                        <div className='senha'>
                            <label>Senha</label>
                            <input className='input' type='password' placeholder='Insira sua senha' required value={senha} onChange={(e) => setSenha(e.target.value)}></input>
                        </div>

                        <div className='confirmaSenha'>
                            <label>Confirmar senha</label>
                            <input className='input' type='password' placeholder='Confirme sua senha' required value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)}></input>
                        </div>

                        <button className='contEmail' type='submit' >Continuar com e-mail</button>

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