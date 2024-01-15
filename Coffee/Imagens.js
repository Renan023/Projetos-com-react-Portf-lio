import match from '../image/match.jpg'
import Caramel from '../image/caramel.jpg'
import coffee from'../image/coffee.jpg'
import cappucino from  '../image/cappuccino.jpg'
import Carroussel from './Carrousel'
import cake from '../image/cake.jpg'
import pie from '../image/pie.jpg'
import donuts from '../image/donuts.jpg'

function Imagem(){
    const img = [match,Caramel,cappucino, coffee]
    const imgs =[cake, pie, donuts]
    const snc =[]

    return(
        <div className='imagem'>
            <Carroussel images={img}/>
            <Carroussel images={imgs}/>
            <Carroussel images={snc}/>
        </div>
    )
}

export default Imagem 