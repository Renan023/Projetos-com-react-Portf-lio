import match from '../image/match.jpg'

import Carroussel from './Carrousel'

function Imagem(){
    const img = [match]
    return(
        <div className='imagem'>
            <Carroussel images={img}/>
        </div>
    )
}

export default Imagem 