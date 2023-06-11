import React from 'react'
import '../style/Index.css'
import Name from './Name';

window.alert('Olá, bem vindo ao meu portfólio')//alerta

function Greetings(){

    return(
        <div>
            <Name/>
            <h2 id='pratice' className='pratice'>Vamos praticar</h2>
        </div>
    )
}

export default Greetings