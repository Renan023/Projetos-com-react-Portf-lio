import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Home from './page/Home';
import Saude from './page/Saude';
import Calculator from './page/Calculator';
import Footer from './Components/Footer';

function App() {

  return (
    <Router>
      <Nav nome='Portfólio'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/saude'element={<Saude/>}/>
        <Route path='/calculator' element={<Calculator/>}/>
      </Routes>
      < Footer/>
    </Router>
  );
}

export default App;
