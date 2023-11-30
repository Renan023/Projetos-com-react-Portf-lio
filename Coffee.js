import '../style/Index.css'
import Welcome from '../Coffee/Welcome'
import Inputradio from '../Coffee/Inputrad'
import TitleCoffee from '../Coffee/Titlecoffee'

function NeonWave(){

    return(
        <div className='imgcoffee'>
            <div id='coffee'>
                <TitleCoffee title='NeonWave Coffee'/>
                <Welcome/>
                <Inputradio/>
                <div id='mid' className='mid'>
                    
                </div> 
            </div>
        </div>
    )
}

export default NeonWave