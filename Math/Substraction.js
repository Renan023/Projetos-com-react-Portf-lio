

function Substraction(){
    function Subtracao(){
        let n1 = document.getElementById('numero')
        let n2 = document.getElementById('numero1')
        let res = document.getElementById('resultado')
        let v1 = Number(n1.value)
        let v2 = Number(n2.value)
        let sub = v1 - v2
        res.innerHTML = `Resultado da subtração ${sub}`
    }

    return(
        
            <input type='Submit' value='Subtração' onClick={Subtracao}/>
        
    )
}

export default Substraction