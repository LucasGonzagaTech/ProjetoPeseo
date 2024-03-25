//COMPONENTES REACT
import react from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//CSS
import './App.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Páginas
import Header from './components/Header/Header';
import Home from './components/Home/Home'

import Login from './components/Login/Login'
import Cadastro from './components/Cadastro/Cadastro'
import Recuperacao from './components/Recuperacao/Recuperacao'

import Catalogo from './components/Catalogo/Catalogo';
import HomepLoginTutor from './components/HomepLoginTutor/HomepLoginTutor';
import PostarAula from './components/PostarAula/PostarAula';


function App() {
  return (
<>
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Home/>} />
      <Route path='*' element={<h1>Not Found</h1>} />

      <Route path='/login' element={<Login/>} />
      <Route path='/cadastro' element={<Cadastro/>} />
      <Route path='/recuperacao' element={<Recuperacao/>} />

      <Route path='/catalogo' element={<Catalogo/>} />
      <Route path='/home-tutor' element={<HomepLoginTutor/>} />
      <Route path='/postar-aula' element={<PostarAula/>} />
      
    </Routes>
    </BrowserRouter>
</>
    
  );
}

export default App;
