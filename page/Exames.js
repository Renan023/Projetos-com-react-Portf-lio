import '../style/Index.css'
import Eritrograma from '../Exames/Eritrograma'
import Title from '../Components/Title'
import Sub from '../Components/Sub'
import Leucograma from '../Exames/Leucograma'

function Saude (){

    return(
        <div id='exames' className='exames'>
            <Title title='Hemograma'/>
            <Eritrograma/>
            <Sub sub='Leucograma'/>
            <Leucograma/>
            <Sub sub='Plaquetas'/>
        </div>
    )
}

export default Saude