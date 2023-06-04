function ThreeRule(){
    function regra3(){
        let n = document.getElementById('numero2')
        let n1 = document.getElementById(`numero3`)
        let n2 = document.getElementById('numero4')
        let res = document.getElementById('resultado1')
        let a = Number(n.value)
        let b = Number(n1.value)
        let c = Number(n2.value)
        let tr =(a*c)/b
        res.innerHTML = `O resultado da regra de 3 é ${tr}`
    }
    return(
        <>
            <input type='Submit' value='Regra de 3' onClick={regra3}/>
        </>
    )
}
export default ThreeRule