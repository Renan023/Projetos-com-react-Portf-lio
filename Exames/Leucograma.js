import Leucocitos from "./Leucocitos"
import Basofilos from "./Basofilos"
import Eosinfilos from "./Eosinofilos"
import Mielocitos from "./Mielocitos"
import Bastonete from "./Bastonete"
import Segmentado from "./Segmentado"
import Linfocitos from "./Linfocitos"
import Monocitos from "./Monocitos"

function Leucograma(){
    return(
        <div>
            <input type='number' id="leucog" className="number" />
            <div>
            <Leucocitos/>
            <Basofilos/>
            <Eosinfilos/>
            <Mielocitos/>
            <Bastonete/>
            <Segmentado/>
            <Linfocitos/>
            <Monocitos/>
            </div>
                <div id="ref1" className="ref">
                    <h4>O que pode significar?</h4>
                </div>
        </div>
    )
}

export default Leucograma