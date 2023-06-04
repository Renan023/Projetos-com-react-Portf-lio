function Min(){
    function minima(){
        let n = document.getElementById('numero2')
        let n1 = document.getElementById('numero3')
        let n2 = document.getElementById('numero4')
        let res = document.getElementById('resultado1')
        let v = Number(n.value)
        let v1 = Number(n1.value)
        let v2 = Number(n2.value)
        let mn = Math.min(v,v1,v2)
        res.innerHTML = `A mínima dos valores selecionado é ${mn}`
    }
    return(
        <>
            <input type='Submit' value='Mínima' onClick={minima}/>
        </>
    )
}

export default Min