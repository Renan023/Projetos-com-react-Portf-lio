function Max(){
    function maxima(){
        let n = document.getElementById('numero2')
        let n1 = document.getElementById('numero3')
        let n2 = document.getElementById('numero4')
        let res = document.getElementById('resultado1')
        let v = Number(n.value)
        let v1 = Number(n1.value)
        let v2 = Number(n2.value)
        let mx = Math.max(v,v1,v2)
        res.innerHTML = `A máxima dos valores selecionados é ${mx}`
    }
    return(
        <>
            <input type='Submit' value='Máxima' onClick={maxima}/>
        </>
    )
}

export default Max