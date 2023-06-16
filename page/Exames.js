import '../style/Index.css'
import Eritrograma from '../Exames/Eritrograma'
import Title from '../Components/Title'
import Sub from '../Components/Sub'
import Leucograma from '../Exames/Leucograma'

function Saude (){

    return(
        <div id='exames' className='exames'>
            <Title title='Exames'/>
            <Eritrograma/>
            <Sub sub='Leucograma'/>
            <Leucograma/>
        </div>
    )
}

export default Saude