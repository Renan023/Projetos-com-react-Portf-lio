
import './App.css';
import Nav from './Components/Nav';
import Time from './Components/Time';
import Title from './Components/Title';
import Greetings from './Components/Greetings';
import Input02 from './Components/Input02';
import Input03 from './Components/Input03';

function App() {

  return (
    <div className="App">
      <Nav nome="Atividade 03 Pensar e Responder"/>
      <Time/>
      <Title title="Operações Aritméticas"/>
      <Greetings/>
      <Input02/>
      <Input03/>
    </div>
  );
}

export default App;
