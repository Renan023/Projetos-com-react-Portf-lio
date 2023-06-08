import Greetings from '../Components/Greetings';
import Title from '../Components/Title';
import Time from '../Components/Time';
import Input03 from '../Components/Input03';
import Input02 from '../Components/Input02';
import Input01 from '../Components/Input01';

function Calculator (){

    return(
        <>
            <Time/>
            <Title title='Calculadora'/>
            <Greetings/>
            <Input03/>
            <Input02/>
            <Input01/>
        </>
    )
}

export default Calculator