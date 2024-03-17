import React from 'react';
import './cadastro.css'

function Cadastro() {
    return (
        <main>
            <section className='teste'>
                <form className='cadastro'>
                    <h1>Crie uma conta</h1>
                    <div className='nome'>
                        <label>Nome</label>
                        <input type='text' placeholder='Insira seu nome completo' required ></input>

                    </div>
                    <div className='email'>
                        <label>E-mail</label>
                        <input type='email' placeholder='Insira seu emal' required></input>
                    </div>

                    <div className='numTel'>
                        <label>Telefone</label>
                        <input type='tel' placeholder='(11) 9999-9999' required></input>
                    </div>

                    <div className='senha'>
                        <label>Senha</label>
                        <input type='password' placeholder='Insira sua senha' required></input>
                    </div>

                    <div className='confirmaSenha'>
                        <label>Confirmar senha</label>
                        <input type='password' placeholder='Confirme sua senha' required></input>
                    </div>

                    <button className='contEmail'>Continuar com e-mail</button>

                    <div className='Login'>
                        <p>Ja tem cadastro? <a href='#'>Login</a></p>
                    </div>
                </form>
            </section>
        </main>

    )
}

export default Cadastro;