import './Input.css'
import Max from '../Math/Max'
import Min from '../Math/Min'
import EquationSec from '../Math/EquationSec'
import ThreeRule from '../Math/ThreeRule'

function Input03(){

    return(
        <div>
            <input type='number' id="numero2" className="numero"/>
            <input type='number' id='numero3' className="numero"/>
            <input type='number' id='numero4' className="numero"/>
            <div>
                <Max/>
                <Min/>
                <EquationSec/>
                <ThreeRule/>
            </div>
            <div id='resultado1' className='resultado'>
                <h4>Resultado</h4>
            </div>
        </div>
    )
}

export default Input03