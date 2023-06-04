import { useState } from "react";
import './Name.css'



function Name(){
    var [nome,setNome] = useState()
    
    function nm(e){
        e.preventDefault()
        setNome(nome)
        console.log(nome+' acessou')
    }

    return(
        <div className='greetings'>
            <h4>Qual seu nome?</h4>
            <input type='text' id='inputname' className='inputname' placeholder='Digite seu nome' 
            onChange={(e)=>setNome(e.target.value)}/>
            <input type='Submit' value='Enviar' onClick={nm}/>{
                nome && (
            <h1 className='nome'>{nome},</h1>
            )}
            </div>
        )
}

    export default Name