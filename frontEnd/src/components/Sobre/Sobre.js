import './sobre.css'
import React from "react";
import { Nav } from "react-bootstrap";
import Header from '../Header/Header';
import img1 from '../../img/sobre1.png'
import img2 from '../../img/sobre2.png'
import img3 from '../../img/sobre3.png'
import Footer from '../Footer/Footer';

const Sobre = () => {
    return (
        <>
            <Header />
            <main className='geralSobre'>
                <h1 className='titleSobre1'>Quem somos?</h1>
                <div className='divBtnSobre'>
                    <button className='btnSobre'>Sobre a PESEO</button>
                    <button className='btnSobre'>Missão</button>
                    <button className='btnSobre'>Método</button>
                    <button className='btnSobre'>Equipe</button>
                    <button className='btnSobre'>Entre em contato</button>
                </div>

                <div className='sobre1'>
                    <div className='sobretxt1'>
                        <h1 className='sobretitle1'>Uma Plataforma criada a partir da vontade de ajudar</h1>
                        <p className='subTitleSobre'>Criada em 2023, o projeto PESEO é uma plataforma elaborada da vontade de auxiliar os estudantes em seus sonhos de ingressarem no curso superior que desejarem no futuro. Com aulas objetivas e dinâmicas, buscando sempre trazer diferentes experiências fornecidas em sala de aula. Aspiramos atingir as necessidades dos alunos trazendo o reforço necessário.</p>
                        <p className='subTitleSobre'>Desde a ideia inicial do projeto buscamos a diferença dentre aquilo que já foi criado. Queremos que os alunos se sintam a vontade e que aproveitem o conteúdo da plataforma, contamos também com a ajuda dos graduandos que auxiliam na matéria, os quais são exibidas e fornecidas para o auxílio de usuários da plataforma. </p>
                        <p className='subTitleSobre'>Nossa equipe produziu tudo com muito esforço e dedicação desde o primeiro instante. Desejamos que façam bom proveito de tudo!</p>
                    </div>

                    <div className='img1'>
                        <img src={img1} />
                    </div>

                </div>

                <div className='sobre2'>
                    <div>
                        <img src={img2} />
                    </div>

                    <div className='sobretxt2'>
                        <h1 className='sobretitle2'>Nossa missão</h1>
                        <p className='subTitleSobre2'>Incentivar o ensino de forma clara e objetiva utilizando ferramentas de reforço, visando a inclusão dos alunos no mundo acadêmico para futuramente cursarem o que desejam.</p>
                    </div>
                </div>

                <div className='sobre3'>
                    <div className='sobretxt3'>
                        <h1 className='sobretitle3'>Nosso método de ensino</h1>
                        <p className='subTitleSobre3'>Na PESEO, oferecemos uma abordagem educacional colaborativa, onde alunos de todas as idades e habilidades podem aprender juntos. Com uma variedade de cursos e recursos interativos, nossa equipe dedicada promove um ambiente seguro e inclusivo, capacitando os alunos a desenvolver habilidades críticas para o futuro. Junte-se a nós e experimente o poder transformador do aprendizado na PESEO.</p>
                    </div>
                    <div className='img3'>
                        <img src={img3} />
                    </div>
                </div>

                <div className='sobreContato'>
                    <h1 className='titleContato'>Como entrar em contato conosco:</h1>
                    <p className='subTitleContato'>Algum problema? Clique aqui para obter ajuda.</p> {/* colocar aqui uma rota para obter ajuda */}
                    <p className='subTitleContato'>Quer fazer uma parceria conosco? Mande um e-mail! peseopj@outlook.com</p>
                </div>

            </main>
            <Footer />
        </>
    )
}

export default Sobre;