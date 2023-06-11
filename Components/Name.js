import { useState } from "react";
import '../style/Index.css'

function Name(){
    var [nome,setNome] = useState()
    
    return(
        <div className='greetings'>
            <h4>Qual seu nome?</h4>
            <input type='text' id='inputname' className='inputname' placeholder='Digite seu nome' 
            onChange={(e)=>setNome(e.target.value)}/>{
                nome && (
            <h1 className='nome'>{nome},</h1>
            )}
            </div>
        )
}

    export default Name