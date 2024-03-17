// IMG

//CSS
import './App.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//import Header from './components/Header/Header';
import Cadastro from './components/Cadastro/Cadastro';
import Home from './components/Home/Home';
import Login from './components/Login/Login'

function App() {
  return (
    <div className="App">
         <Home/>
         <Login/>
    </div>
  );
}

export default App;
