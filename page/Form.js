import '../style/Index.css'
import Title from '../Components/Title';
import InputForm from '../register/InputForm';
import Inputrad from '../register/Inputrad';

function Form(){
    return (
        <div id='form' className='form'>
            <Title title='Formulário'/>
            <InputForm type='text' text='Nome completo ' name='nome' placeholder='Digite seu nome'/>
            <InputForm type='number' text='Idade 'name='idade'placeholder='Qual sua idade? '/>
            <Inputrad/>
        </div>
    )
}
 

export default Form