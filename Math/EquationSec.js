function EquationSec(){
    function second(){
        let n = document.getElementById('numero2')
        let n1 = document.getElementById('numero3')
        let n2 = document.getElementById('numero4')
        let res = document.getElementById('resultado1')
        let a = Number(n.value)
        let b = Number(n1.value)
        let c = Number(n2.value)
        let delta = Math.pow(b,2) - 4*a*c
        let x1 = (-b+(Math.sqrt(delta)))/(2*a)
        let x2 = (-b-(Math.sqrt(delta)))/(2*a)
        res.innerHTML = `O resultado da equação de segundo grau e x1 = ${x1} e x2 = ${x2}`
    }
    return(
        <>
            <input type='Submit' value='Equação Seg' onClick={second}/>
        </>
    )
}

export default EquationSec