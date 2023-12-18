import '../style/Index.css'
import Eritrograma from '../Exames/Eritrograma'
import Title from '../Components/Title'
import Leucograma from '../Exames/Leucograma'
import Plaquetas from '../Exames/Plaquetas'

function Saude (){

    return(
        <div id='exames' className='exames'>
            <Title title='Hemograma'/>
            <Eritrograma/>
            <Leucograma/>
            <Plaquetas/>
        </div>
    )
}

export default Saude