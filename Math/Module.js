function Module(){
    function modulo(){
        let n1 = document.getElementById('numero')
        let n2 = document.getElementById('numero1')
        let res = document.getElementById('resultado')
        let v1 = Number(n1.value)
        let v2 = Number(n2.value)
        let mod = v1 % v2
        res.innerHTML = `Resultado da operação é ${mod}`
    }
    return(
        <>
            <input type='Submit' value='Módulo' onClick={modulo}/>
        </>
    )
}

export default Module