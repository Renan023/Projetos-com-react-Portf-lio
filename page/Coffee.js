import '../style/Index.css'
import Welcome from '../Coffee/Welcome'
import Inputradio from '../Coffee/Inputrad'
import TitleCoffee from '../Coffee/Titlecoffee'
import WWA from '../Coffee/Whoweare'
import Space from '../Coffee/Space'
import Harmonious from '../Coffee/HarmoniousCoffeee'
import Row from '../Coffee/Row'

function CoffeeCo(){

    return(
        <div className='imgcoffee'>
            <div id='coffee'>
                <TitleCoffee title='Coffee Co.'/>
                <Welcome/>
                <Inputradio/>
                <WWA/>
                <Space/>
                <Harmonious/>
                <Row/>
            </div>
        </div>
    )
}

export default CoffeeCo