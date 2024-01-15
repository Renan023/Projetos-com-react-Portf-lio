import Carroussel from "./Carrousel"
import menu0 from '../image/menu0.jpg'
import menu1 from '../image/menu1.jpg'

function Menu(){
    const menu = [menu0, menu1]
    return(
        <div className='menu'>
            <Carroussel images={menu}/>
            <div>
                <h1></h1>
            </div>
        </div>
    )
} 

export default Menu