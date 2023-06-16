import '../style/Index.css'
import VCM from '../Exames/VCM'
import HCM from '../Exames/HCM'
import CHCM from '../Exames/CHCM'
import Sub from './Sub'
import RDW from '../Exames/RDW'
import Hemoglobina from '../Exames/Hemoglobina'
import Hematocrito from '../Exames/Hematocrito'

function InpuT(){

    return (
        <div>
            <h2 id='titulo' className='titulo'>Qual o valor de referência ? </h2>
            <Sub sub='Eritrograma'/>
            <input type='number'id='globverm' className='numero' />
            <div>
                <VCM/>
                <HCM/>
                <CHCM/>
                <RDW/>
                <Hemoglobina/>
                <Hematocrito/>
            </div>
                <div id='ref' className='ref'>      
                    <h4>O que pode significar?</h4>
                </div>
        </div>
    )
}

export default InpuT