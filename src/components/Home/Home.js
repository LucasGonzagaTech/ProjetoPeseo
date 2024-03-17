import React from 'react';
import './home.css'
import imgG1 from '../../img/homeimg/HomeMulher.png'
import imgG2 from '../../img/homeimg/home1.png'
import imgG3 from '../../img/homeimg/home8.png'
import imgG4 from '../../img/homeimg/home7.png'
import imgG5 from '../../img/homeimg/home6.png'
import { Button, Container, } from 'react-bootstrap';

function Home() {
    return(
        <main>
            <Container>
                <div className='geral1'>
                    <div className='imgG1'>
                        <img src={imgG1} alt="Uma menina de cabelos cacheados segurando livros"/>
                    </div>
                    <div className='ContTopo'>
                        <h1>O jeito grátis, divertido e eficaz de aprender!</h1>
                        <Button>Comece a aprender agora!</Button> {/* fazer esse botão ir para a pg de cadastro*/}
                        <Button>Já tem conta? Acesse aqui!</Button>
                    </div>
                </div>
                <div className='geral2'>
                    <div className='imgG2'>
                        <img src={imgG2} alt="um desenho de tres personagens admirando uma beca de graduando"/>
                    </div>
                    <div className='ContTopo'>
                        <h1>Aprenda com alunos universitários!</h1>
                        <p>Junte-se a uma comunidade de alunos e universitários, onde a aprendizagem é colaborativa: conecte-se, compartilhe e cresça junto com os outros!</p>
                    </div>
                </div>
                <div className='geral3'>
                    <div className='ContTopo'>
                        <h1>Para você que esta se graduando!</h1>
                        <p>A PESEO oferece aos estudantes a capacidade de eliminar horas complementares através de uma plataforma intuitiva e eficiente, simplificando o processo de validação de atividades extracurriculares.</p>
                    </div>
                    <div className='imgG3'>
                        <img src={imgG3} alt="um desenho de uma mulher vestida com roupa de gradoando e um canudo na mão"/>
                    </div>
                </div>
                <div className='geral4'>
                    <div className='imgG4'>
                        <img src={imgG4} alt="um desenho de uma mulher vestida com roupa de gradoando e um canudo na mão"/>
                    </div>
                    <div className='ContTopo'>
                        <h1>Ensino dinâmico e acessível.</h1>
                        <p>Priorizamos uma abordagem dinâmica e acessível, proporcionando uma experiência de aprendizado envolvente que se adapta às necessidades individuais dos alunos, promovendo a inclusão e tornando a educação mais acessível a todos.</p>
                    </div>
                </div>
                <div className='geral5'>
                    <div className='ContTopo'>
                        <h1>Para você que esta se graduando!</h1>
                        <p>A PESEO oferece aos estudantes a capacidade de eliminar horas complementares através de uma plataforma intuitiva e eficiente, simplificando o processo de validação de atividades extracurriculares.</p>
                    </div>
                    <div className='imgG5'>
                        <img src={imgG5} alt="um desenho de uma mulher vestida com roupa de gradoando e um canudo na mão"/>
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default Home;