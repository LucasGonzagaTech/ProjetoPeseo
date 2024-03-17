import React from 'react';
import './login.css'

function Login() {
    return (
        <main>
            <section>
                <form>
                    <h1>Faça Login na PESEO</h1>

                    <div className='mail'>
                        <label>E-mail</label>
                        <input type='email' placeholder='Insira seu e-mail' required></input>
                    </div>

                    <div className='Senha'>
                        <label>Senha</label>
                        <input type='password' placeholder='Insira sua senha' required></input>
                    </div>

                    <button className='contiMail'>Continuar com e-mail</button>

                    <div>
                    <p>Esqueceu sua senha? <a href='#'>Altere agora</a></p>
                    <p>Não tem cadastro?<a href='#'>Cadastre-se</a></p>
                    </div>
                </form>
            </section>
        </main>

    )
}

export default Login;