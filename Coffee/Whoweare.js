import React from "react"
import AutomaticImg from "./AutomaticImg"

function WWA(){

    function Who(){
        let dev = document.getElementById('port')

        if(dev.value !== ''){
            dev.innerHTML = `<h4>
                                Quem somos nós
                            </h4>
                            <h4>
                                Na Coffee Co., nossa missão vai além de servir um simples café; buscamos 
                                proporcionar uma experiência excepcional a cada xícara degustada, seja durante 
                                um momento de estudo ou relaxamento. Queremos ser a sua escolha certa para uma 
                                pausa deliciosa.
                                Estamos empenhados em construir uma conexão genuína contigo. Cada feedback 
                                recebido é uma oportunidade para evoluirmos e aprimorarmos continuamente.
                                Junte-se a nós nessa jornada de sabor, qualidade e conexão. Estamos ansiosos 
                                para compartilhar esses momentos especiais contigo na Coffee Connection.
                             </h4>`
        }
    }return(
        <div className="img">
            <AutomaticImg/>
            <div className="who">
                <div id='port'>
                        <h2>
                            Who we are
                        </h2>
                        <h4 >
                            At Coffee Co., our mission goes beyond serving a simple coffee; we seek to provide an 
                            exceptional experience with each cup enjoyed, whether during a moment of study or 
                            relaxation. We want to be your right choice for a delicious break.
                            We are committed to building a genuine connection with you. Each feedback received 
                            is an opportunity for us to continually evolve and improve.
                            Join us on this journey of flavor, quality and connection. We look forward to sharing 
                            these special moments with you at Coffee Connection
                        </h4>           
                        <input type='submit' id="InputCoffee" value='Portuguese' onClick={Who}/>
                </div>
            </div>
        </div>
    )
}

export default WWA