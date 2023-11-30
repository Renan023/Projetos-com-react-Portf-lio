import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Home from './page/Home';
import Exames from './page/Exames';
import Calculator from './page/Calculator';
import Footer from './Components/Footer';
import NeonWave from './page/Coffee';
import Form  from './page/Form';

function App() {

  return (
    <div className='cor'>
    <Router>
      <Nav nome='Portfólio'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exames'element={<Exames/>}/>
        <Route path='/calculator' element={<Calculator/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/neonwave' element={<NeonWave/>}/>
      </Routes>
      < Footer/>
    </Router>
    </div>
  );
}

export default App;
