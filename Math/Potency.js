function Potency(){
    function potencia(){
        let n1 = document.getElementById('numero')
        let n2 = document.getElementById('numero1')
        let res = document.getElementById('resultado')
        let v1 = Number(n1.value)
        let v2 = Number(n2.value)
        let pot = Math.pow(v1,v2)
        res.innerHTML = `Resultado da potência de ${v1} e ${v2} é ${pot}`
    }
    return (
        <>
            <input type='Submit' value='Potência' onClick={potencia}/>
        </>
    )
}

export default Potency