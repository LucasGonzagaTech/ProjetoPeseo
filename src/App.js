// IMG

//CSS
import './App.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Páginas
import Header from './components/Header/Header';

import Login from './components/Login/Login'
import Cadastro from './components/Cadastro/Cadastro'
import Recuperacao from './components/Recuperacao/Recuperacao'

import Catalogo from './components/Catalogo/Catalogo';

import HomepLoginTutor from './components/HomepLoginTutor/HomepLoginTutor';
import PostarAula from './components/PostarAula/PostarAula';


function App() {
  return (
    <div className="App">
      <PostarAula/>
    </div>
  );
}

export default App;
