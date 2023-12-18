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
                    <h3 className="animatedm" >
                        Hey bro,
                        come have a coffee with us and enjoy the day.The day starts with great coffee and good vibes
                    </h3>
                </div>
            )
        }else{
            setMsg(
                <div>
                    <h3 className="animatedf" >
                    Hi sis,
                    Your smile with a good coffee makes this moment special
                    </h3>
                </div>
            )
        }
    }
    return(
        <div>
            <label><b>Gender </b></label>
            <input type='radio' className="masc" id="masc" checked={select =='masc'} onChange={handleOption}/>
            <label>Male</label>
            <input type='radio' className="fem" id="fem" onChange={handleOption}/>
            <label>Femme</label> 
            <input id='InputCoffee'type='Submit' value='Send' onClick={handleSubmit}/>
            <div>
                {msg}
            </div>
        </div>
    )
}

export default Inputradio