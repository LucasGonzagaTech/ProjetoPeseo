import React from 'react';
import './recuperacao.css';
 
function Recuperacao() {
    return(
        <main>
            <section>
                <form className='recuperacao'>
                     <h1>Recuperação da Conta</h1>
 
                     <div className='email'>
                        <label>E-mail</label>
                        <input type='email' placeholder='Insira seu e-mail' required></input>
                     </div>
 
                     <button className='envioCodigo'>Enviar código para e-mail</button>
                <p><a href='#'>voltar</a></p>
                </form>
                   
            </section>
        </main>
    )
}
 
export default Recuperacao;