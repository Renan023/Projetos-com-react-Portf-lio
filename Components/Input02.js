import Sum from "../Math/Sum"
import Substraction from "../Math/Substraction"
import Multiplication from "../Math/Multiplication"
import Division from "../Math/Division"
import Module from "../Math/Module"
import Potency from '../Math/Potency'
import '../style/Index.css'

function Input02(){

    return(
        <div>
            <input type="number" id="numero"  className="numero"/>
            <input type="number" id="numero1" className="numero"/>
            <div>
                    <Sum/>
                    <Substraction/>
                    <Multiplication/>
                    <Division/>
                    <Module/>
                    <Potency/>
            </div>
            <div id="resultado" className="resultado">
                <h4>Resultado</h4>
            </div>
        </div>
    )
}

export default Input02