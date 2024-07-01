import React from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";
import TeachersDaybro1 from "../../img/COMOFUNCTeachersDaybro1.png"
import messybunbro1 from "../../img/COMOFUNCmessybunbro1.png"
import messybunbro2 from "../../img/COMOFUNCmessybunbro2.png"
import messybunbro3 from "../../img/COMOFUNCmessybunbro3.png"
import './comoFunc.css'
// import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ComoFunc = () => {
    return (
        <main className="Main_Como_Func">
            <Header />
            <Container fluid className="divConteiner_ComoFunc">
                <Row>
                    <Col sm={12} className="no-padding">

                        <div className="Saiba_Como">
                            <h1 className="h1ComoFunc">Saiba mais o que nossa plataforma tem a oferecer e como ela funciona.</h1>
                        </div>

                        {/* Parte do Tutor */}

                        <div className="div_Para_Graduando">
                            <div className="column1">
                                <span>Para graduando</span>
                                <h2 className="h2ComoFuc">Qual Matéria eu posso dar?</h2>
                                <p className="pComoFuc">
                                    Nossa plataforma é foca em disciplinas do ensino fundamental ao médio. Nosso intuito é auxiliar os alunos que tenham dificuldades e precisem de um reforço educacional.
                                </p>
                                <Accordion defaultActiveKey="0">

                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Trilha - Matemática</Accordion.Header>
                                        <Accordion.Body>
                                            Explorando números e formas do ensino médio, alinhada com a BNCC.  Avanço para o ensino médio com álgebra, geometria avançada e probabilidade. Biblioteca de recursos digitais e comunidade de aprendizado para aprofundamento e colaboração. Uma jornada emocionante para desenvolver habilidades matemáticas e paixão pelo assunto.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Trilha - Linguagens</Accordion.Header>
                                        <Accordion.Body>
                                            Explorando números e formas do ensino fundamental ao médio, alinhada com a BNCC.
                                            Fundamentos matemáticos no ensino fundamental, incluindo operações básicas e
                                            geometria simples.

                                            Avanço para o ensino médio com álgebra, geometria avançada e probabilidade.
                                            Biblioteca de recursos digitais e comunidade de aprendizado para aprofundamento e
                                            colaboração. Uma jornada emocionante para desenvolver habilidades matemáticas e
                                            paixão pelo assunto.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Trilha - Ciências Humanas</Accordion.Header>
                                        <Accordion.Body>
                                            Explorando números e formas do ensino fundamental ao médio, alinhada com a BNCC.
                                            Fundamentos matemáticos no ensino fundamental, incluindo operações básicas e
                                            geometria simples.

                                            Avanço para o ensino médio com álgebra, geometria avançada e probabilidade.
                                            Biblioteca de recursos digitais e comunidade de aprendizado para aprofundamento e
                                            colaboração. Uma jornada emocionante para desenvolver habilidades matemáticas e
                                            paixão pelo assunto.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Trilha - Ciências da Natureza</Accordion.Header>
                                        <Accordion.Body>
                                            Explorando números e formas do ensino fundamental ao médio, alinhada com a BNCC.
                                            Fundamentos matemáticos no ensino fundamental, incluindo operações básicas e geometria
                                            simples.

                                            Avanço para o ensino médio com álgebra, geometria avançada e probabilidade.
                                            Biblioteca de recursos digitais e comunidade de aprendizado para aprofundamento e
                                            colaboração. Uma jornada emocionante para desenvolver habilidades matemáticas e
                                            paixão pelo assunto.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>
                            </div>
                            <div className="column2">
                                <img className="Img_ComoFunc1" src={TeachersDaybro1} alt="#" fluid />
                            </div>
                        </div>

                        <div className="div_Para_Graduando2">
                            <div className="Img_ComoFunc2">
                                <img src={messybunbro1} alt="#" fluid />
                            </div>
                            <div className="column4">
                                <span>Para graduando</span>
                                <h2 className="h2ComoFuc">Como Funciona a eliminação de horas complementares </h2>
                                <p className="pComoFuc">
                                    Nossa plataforma foca em disciplinas do ensino fundamental á médio, nosso intuído
                                    é ajudar os alunos que tenha dificuldade e precisa de um reforço educacional.
                                </p>
                                <Accordion defaultActiveKey="0">

                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Cadastro de atividades educacionais</Accordion.Header>
                                        <Accordion.Body>
                                            Explorando números e formas do ensino médio, alinhada com a BNCC.

                                            Avanço para o ensino médio com álgebra, geometria avançada e probabilidade.
                                            Biblioteca de recursos digitais e comunidade de aprendizado para aprofundamento e
                                            colaboração. Uma jornada emocionante para desenvolver habilidades matemáticas e
                                            paixão pelo assunto.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Análise e validação pedagógica</Accordion.Header>
                                        <Accordion.Body>
                                            Explorando números e formas do ensino fundamental ao médio, alinhada com a BNCC.
                                            Fundamentos matemáticos no ensino fundamental, incluindo operações básicas e
                                            geometria simples.

                                            Avanço para o ensino médio com álgebra, geometria avançada e probabilidade.
                                            Biblioteca de recursos digitais e comunidade de aprendizado para aprofundamento e
                                            colaboração. Uma jornada emocionante para desenvolver habilidades matemáticas e
                                            paixão pelo assunto.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Atribuição de horas complementares pedagógicas</Accordion.Header>
                                        <Accordion.Body>
                                            Explorando números e formas do ensino fundamental ao médio, alinhada com a BNCC.
                                            Fundamentos matemáticos no ensino fundamental, incluindo operações básicas e
                                            geometria simples.

                                            Avanço para o ensino médio com álgebra, geometria avançada e probabilidade.
                                            Biblioteca de recursos digitais e comunidade de aprendizado para aprofundamento e
                                            colaboração. Uma jornada emocionante para desenvolver habilidades matemáticas e
                                            paixão pelo assunto.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>

                        {/* Parte do Aluno */}

                        <div className="div_Para_Aluno">

                            <div className="column5">
                                <span>Para Alumo</span>
                                <h2 className="h2ComoFuc">Veja aulas gravadas por universitatios e aprenda junto com eles</h2>
                                <p className="pComoFuc">Nesta plataforma online, você pode acessar aulas gravadas por universitários, oferecendo
                                    uma oportunidade única de aprender com a experiência compartilhada durante seus cursos.
                                    Assista quantas vezes quiser para aprofundar seu conhecimento em diversas áreas.
                                </p>
                            </div>
                            <div className="column6">
                                <img className="Img_ComoFunc3" src={messybunbro2} alt="Logo" fluid />
                            </div>
                        </div>

                        <div className="div_Para_Aluno2">
                            <div className="column7">
                                <img className="Img_ComoFunc4" src={messybunbro3} alt="" fluid />
                            </div>
                            <div className="column8">
                                <span>Para Alumo</span>
                                <h2 className="h2ComoFuc">Responda questionarios para melhorar seu aprendizado</h2>
                                <p className="pComoFuc">Nesta plataforma online, você pode acessar aulas gravadas por universitários, oferecendo
                                    uma oportunidade única de aprender com a experiência compartilhada durante seus cursos.
                                    Assista quantas vezes quiser para aprofundar seu conhecimento em diversas áreas.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </main >
    )
}

export default ComoFunc;