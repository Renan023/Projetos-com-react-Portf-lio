import '../style/Index.css'
import Multitable from '../Math/Multitable'
import Fatorial from '../Math/Fatorial'

function Input01(){

    return(
        <div>
            <input type='number' id='numero5' className='numero'/>
                <div>
                    <Multitable/>
                    <Fatorial />
                </div>
            <div id='resultado2' className='resultado'>
                <h4>Resultado</h4>
                
            </div>
        </div>
    )
}

export default Input01