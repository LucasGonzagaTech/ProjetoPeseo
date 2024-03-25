import { Button } from "bootstrap";
import React from "react";

import img1 from '../../img/sobre1.png'
import img2 from '../../img/sobre2.png'
import img3 from '../../img/sobre3.png'

const Sobre = () =>{
    return(
        <main>

            <div>
                <h1>Quem somos?</h1>

                <button>Sobre a Peseo</button>
                <button>Missão</button>
                <button>Método</button>
                <button>Equipe</button>
                <button>Entre em contato</button>
            </div>

            <div>
                <div>
                    <h1>Uma Plataforma criada a partir da vontade de ajudar</h1>
                    <p>Criada em 2023 o projeto PESEO é uma plataforma que foi criada da vontade de ajudar os estudantes em seus sonhos de ingressarem no curso que desejarem no futuro. Com aulas objetivas e dinâmicas, buscando sempre trazer diferentes experiências das fornecidas em sala de aula, com a pretendemos atingir as necessidades dos alunos trazendo o reforço necessário.</p>
                    <p>Desde a ideia inicial do projeto buscamos a diferença dentre aquilo que ja foi criado, queremos que o alunos se sintam a vontade e que aproveitem o conteúdo da plataforma, contamos tambem com a ajuda dos graduandos que auxiliam na matéria que é exibida e fornecida para o auxilio. </p>
                    <p>Nossa equipe produziu tudo com muito esforço e dedicação desde o primeiro instante desejamos que façam bom proveito de tudo!</p>
                </div>

        <img src={img1}/>
            </div>

            <div>
                <img src={img2}/>
                <div>
                    <h1>Nossa missão</h1>

                    <p>Incentivar o ensino de forma clara e objetiva utilizando ferramentas de reforço, visando a inclusão dos alunos no mundo acadêmico para futuramente cursarem o que desejam.</p>
                </div>

                
            </div>

        </main>
    )
}

export default Sobre;