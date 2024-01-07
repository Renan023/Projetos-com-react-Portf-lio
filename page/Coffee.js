import '../style/Index.css'
import Welcome from '../Coffee/Welcome'
import Inputradio from '../Coffee/Inputrad'
import TitleCoffee from '../Coffee/Titlecoffee'
import WWA from '../Coffee/Whoweare'
import Harmonious from '../Coffee/HarmoniousCoffeee'
import AudioPlayer from '../Coffee/Music'
import Time from '../Components/Time'
import Imagem from '../Coffee/Imagens'
import Space from '../Coffee/Space'

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
                <Space/>
                <Imagem/>
            </div>
        </div>
    )
}

export default CoffeeCo