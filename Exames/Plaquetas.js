import Sub from "../Components/Sub"

function Plaquetas(){
    function plaquetas(){
        let valor = document.getElementById('plaquetas')
        let res = document.getElementById('ref2')
        let v = Number(valor.value)
        if (v > 450){
            res.innerHTML = `<b>O aumento plaquetário pode causar trombose</br> 
            <u>Anemia hemolítica grave</br>Anemia ferropriva</br>COVID-19</b></u>`
        } else if(v < 150){
            res.innerHTML = `<b>A diminuição de plaquetas pode causar <u>trombocitopenia</b></u>`
        }else{
            res.innerHTML  = `<b>Parabéns, mas não se descuide</b>`
        }
    }return(
        <div>
            <Sub sub='Plaquetas'/>
            <input type='Number' id="plaquetas" className="numero"/>
            <div>
            <input type='Submit' value='Plaquetas' onClick={plaquetas}/>
            </div>
            <div id="ref2" className="ref">
                <h4>O que pode significar?</h4>
            </div>
        </div>
    )
}

export default Plaquetas