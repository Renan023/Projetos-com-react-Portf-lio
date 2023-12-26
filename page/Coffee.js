import '../style/Index.css'
import Welcome from '../Coffee/Welcome'
import Inputradio from '../Coffee/Inputrad'
import TitleCoffee from '../Coffee/Titlecoffee'
import WWA from '../Coffee/Whoweare'
import Harmonious from '../Coffee/HarmoniousCoffeee'
import AudioPlayer from '../Coffee/Music'
import Time from '../Components/Time'

function CoffeeCo(){

    return(
        <div className='imgcoffee'>
            <div id='coffee'>
                <AudioPlayer/>
                <Time/>
                <TitleCoffee title='Coffee Co.'/>
                <Welcome/>
                <Inputradio/>
                <WWA/>
                <Harmonious/>
            </div>
        </div>
    )
}

export default CoffeeCo