import React from "react";
import { Container, Accordion, Button, Row, Col } from "react-bootstrap";
import TeachersDaybro1 from "../../img/TeachersDaybro1.png"
import messybunbro1 from "../../img/messybunbro1.png"
import messybunbro2 from "../../img/messybunbro2.png"
import messybunbro3 from "../../img/messybunbro3.png"
import './comoFunc.css'

const ComoFunc = () => {
    return (
        <main className="Main_Como_Func">
            <Container>

                <div className="Saiba_Como">
                    <h1>Saiba mais oque nossa plataforma tem a oferecer e como ela funciona</h1>
                </div>
                <Row>

                    <Col>
                        <div className="div_Para_Graduando">
                            <div className="column1">
                                <span>Para graduando</span>

                                <h2>Qual Matéria eu posso dar?</h2>
                                <p>
                                    Nossa plataforma foca em disciplinas do ensino fundamental á médio, nosso intuído
                                    é ajudar os alunos que tenha dificuldade e precisa de um reforço educacional.
                                </p>
                                <Accordion defaultActiveKey="0">

                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Trilha-Matemática</Accordion.Header>
                                        <Accordion.Body>
                                            Explorando números e formas do ensino médio, alinhada com a BNCC.

                                            Avanço para o ensino médio com álgebra, geometria avançada e probabilidade.
                                            Biblioteca de recursos digitais e comunidade de aprendizado para aprofundamento e
                                            colaboração. Uma jornada emocionante para desenvolver habilidades matemáticas e
                                            paixão pelo assunto.
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
                                <img src={TeachersDaybro1} alt="#" fluid />
                            </div>
                        </div>
                    </Col>
                    
                    <Col>
                        <div className="div_Para_Graduando2">

                            <div className="column3">
                                <img src={messybunbro1} alt="#" fluid />
                            </div>

                            <div className="column4">
                                <span>Para graduando</span>

                                <h2>Como Funciona a eliminação de horas complementares </h2>
                                <p>
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
                    </Col>
                </Row>

                <div className="cadastra-seLog">
                    <p>Entre na PESEO para ajuda personalizada em seus estudos ou
                        para aprender algo novo.</p>

                    <Button>Cadastra-se</Button>
                </div>

                <div className="div_Para_Aluno">
                    <div className="column6">
                        <img src={messybunbro2} alt="Logo" fluid />
                    </div>

                    <div className="column5">
                        <span>Para Alumo</span>
                        <h2>Veja aulas gravadas por universitatios e aprenda junto com eles</h2>
                        <p>Nesta plataforma online, você pode acessar aulas gravadas por universitários, oferecendo
                            uma oportunidade única de aprender com a experiência compartilhada durante seus cursos.
                            Assista quantas vezes quiser para aprofundar seu conhecimento em diversas áreas.
                        </p>
                    </div>

                </div>

                <div className="div_Para_Aluno">

                    <div className="column7">
                        <img src={messybunbro3} alt="" fluid />
                    </div>

                    <div className="column8">
                        <h2>Responda questionarios para melhorar seu aprendizado</h2>
                        <p>Nesta plataforma online, você pode acessar aulas gravadas por universitários, oferecendo
                            uma oportunidade única de aprender com a experiência compartilhada durante seus cursos.
                            Assista quantas vezes quiser para aprofundar seu conhecimento em diversas áreas.
                        </p>
                    </div>

                    <span>Para Alumo</span>

                </div>
            </Container>
        </main >
    )
}

export default ComoFunc;