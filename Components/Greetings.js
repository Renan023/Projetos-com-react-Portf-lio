import React from 'react'
import './Greetings.css'
import Name from './Name';

window.alert('Olá, vamos fazer a atividade 03')//alerta


function Greetings(){

    return(
        <div>
            <Name/>
            <h2 id='pratice' className='pratice'>Vamos praticar</h2>
        </div>
    )
}

export default Greetings