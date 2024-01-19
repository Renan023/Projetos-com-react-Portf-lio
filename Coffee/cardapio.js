import Carroussel from "./Carrousel"
import menu0 from '../image/menu0.jpg'
import menu1 from '../image/menu1.jpg'

function Menu(){
    const menu = [menu0, menu1]

    function DigitalMenu(){
        let cardapio = document.getElementById('menu')
        if (cardapio.value !== ''){
            cardapio.innerHTML =    `<h3>
                                        Se preferir faça seu pedido pelo tablet em sua mesa
                                    </h3> `
        }
    }
    return(
        <div className='menu'>
            <Carroussel images={menu}/>
            <div id="menu">
                <h3>If you prefer, place your order using a tablet at your table</h3>
                <input type='Submit' value='Portuguese' id='InputCoffee' onClick={DigitalMenu}/>
            </div>
        </div>
    )
} 

export default Menu