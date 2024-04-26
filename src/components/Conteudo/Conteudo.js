import React from "react";
import './conteudo.css'; 


function Conteudo() {
    return (
        <main>
             <div className="juncao">
                <div className="item">
                    <h4 className="itens">Meus Itens</h4>
                    <h4 className="painel">Meus Painel</h4>
                    <h4 className="conteudo">Conteudo</h4>
                    <h4 className="conta">Minha conta</h4>
                </div>
            

            {/* <div class="linha-vertical"></div> */}

                <div className="tutor">
                    <h2>Olá, (Nome do Tutor) </h2>

                    <h3>Seu conteudo</h3>
                </div>

            </div>


        </main>
    )
}

export default Conteudo;