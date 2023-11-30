import React,{useState} from "react"

function Inputradio(){
    const [select, setSelect] = useState('masc')
    const [msg, setMsg] = useState()

    const handleOption = (event) =>{
        setSelect(event.target.value)
    }
    const handleSubmit = () => {
        if (select == 'masc') {
            setMsg(
                <div>
                    <p>Oi</p>
                </div>
            )
        }else{
            setMsg(
                <div>
                    <p>tchau</p>
                </div>
            )
        }
    }
    return(
        <div>
            <label><b>Gender </b></label>
            <input type='radio' className="masc" id="masc" checked={select ==='masc'} onChange={handleOption}/>
            <label>Male</label>
            <input type='radio' className="fem" id="fem" checked={select === 'fem'} onChange={handleOption}/>
            <label>Femme</label> 
            <input id='InputCoffee'type='Submit' value='Send' onClick={handleSubmit}/>
            <div>
                {msg}
            </div>
        </div>
    )
}

export default Inputradio