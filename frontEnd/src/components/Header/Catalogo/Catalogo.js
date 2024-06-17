import react, {useState} from 'react';
import Header from "../Header/Header";
import CardItem from './CardItem';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import img1 from '../../img/logo.png'
import equipe from '../../img/column.png'
import professor from '../../img/professor.png'


import "./catalogo.css"

export default ()=>{

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    return(
        <>
        <Header/>
<h1 className='h1Catalogo'>Últimas aulas postadas</h1>
<div className='categorias'>
  <p>Matemática</p>
<p>Linguagens</p>
<p>Ciências Humanas</p>
<p>Ciências da Natureza</p>
</div>


        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>

        <div className='card1'>   

        <CardItem
        title="Professora 1"
        imageSrc={professor}
        text="Descrição da aula"
      />
      <CardItem
        title="Professora 2"
        imageSrc={professor}
        text="Descrição da aula"
      />
      <CardItem
        title="Professora 3"
        imageSrc={professor}
        text="Descrição da aula"
      />

    </div>

      </Carousel.Item>

      <Carousel.Item>
        <div className='card1'>   

        <CardItem
        title="Professora 4"
        imageSrc={professor}
        text="Descrição da aula"
      />
      <CardItem
        title="Professora 5"
        imageSrc={professor}
        text="Descrição da aula"
      />
      <CardItem
        title="Professora 6"
        imageSrc={professor}
        text="Descrição da aula"
      />

    </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className='card1'>  

      <CardItem
        title="Professora 7"
        imageSrc={professor}
        text="Descrição da aula"
      />
      <CardItem
        title="Professora 8"
        imageSrc={professor}
        text="Descrição da aula"
      />
      <CardItem
        title="Professora 9"
        imageSrc={professor}
        text="Descrição da aula"
      />

    </div>
      </Carousel.Item>

    </Carousel>
   {/*CARROSSEL MATEMÁTICA*/}
     <h1>Matemática</h1>

      
     <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className='card1'>   
        <CardItem
        title="Professora 1"
        imageSrc={professor}
        text="Descrição da aula"
      />
      <CardItem
        title="Professora 2"
        imageSrc={professor}
        text="Descrição da aula"
      />
      <CardItem
        title="Professora 3"
        imageSrc={professor}
        text="Descrição da aula"
      />
    </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className='card1'>   
        <CardItem
        title="Professora 1"
        imageSrc={professor}
        text="Descrição da aula"
      />
      <CardItem
        title="Professora 2"
        imageSrc={professor}
        text="Descrição da aula"
      />
      <CardItem
        title="Professora 3"
        imageSrc={professor}
        text="Descrição da aula"
      />
    </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className='card1'>   
        <CardItem
        title="Professora 1"
        imageSrc={professor}
        text="Descrição da aula"
      />
      <CardItem
        title="Professora 2"
        imageSrc={professor}
        text="Descrição da aula"
      />
      <CardItem
        title="Professora 3"
        imageSrc={professor}
        text="Descrição da aula"
      />
      </div>
      </Carousel.Item>

    </Carousel>

{/*CATEGORIAS*/}
  <div className='principaisCategorias'>
<h1>Principais Categorias</h1>

<div className='session1'>

<div>
  <h4>Matemárica</h4>
  <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
</div>

<div>
  <h4>Português</h4>
  <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
</div>

</div>


<div className='session2'>

<div>
  <h4>Ciências da Natureza</h4>
  <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
</div>

<div>
  <h4>Ciências humanas</h4>
  <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
</div>

</div>

    </div>
  {/*FIM CATEGORIAS*/}


{/*OBJETIVOS*/}
  <div className='objetivo'>
    <div>
<img src={img1} />
<h2>Uma plataforma de evolução Coletiva</h2>

<p>
Construa Juntos o Futuro: Nossa plataforma de evolução 
coletiva oferece um espaço colaborativo onde indivíduos 
podem se unir para criar e moldar o futuro que desejam ver.
</p>

<p>
Desenvolvimento Pessoal em uma Escala Global: Imagine ter 
acesso a uma plataforma onde você pode não apenas expandir 
seus horizontes intelectuais, mas também contribuir para o 
desenvolvimento de outros ao redor do mundo.
</p>

    </div>

<img src={equipe} />
  </div>
  {/*FIM OBJETIVOS*/}
        </>
    )
}