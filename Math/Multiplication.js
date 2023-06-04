function Multiplication(){
    function multiplicacao(){
        let n1 = document.getElementById('numero')
        let n2 = document.getElementById('numero1')
        let res = document.getElementById('resultado')
        let v1 = Number(n1.value)
        let v2 = Number(n2.value)
        let multi = v1 * v2
        res.innerHTML = `Resultado da multiplicação é ${multi}`
    }
    return(
        
            <input type='Submit' value='Multiplicação' onClick={multiplicacao}/>
        
    )
}

export default Multiplication