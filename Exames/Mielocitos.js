function Mielocitos(){
    function mielocitos (){
        let valor = document.getElementById('leucog')
        let res = document.getElementById(`ref1`)
        let v = Number(valor.value)
        if (v > 0){
            res.innerHTML = `<b>Sua médula óssea está tendo que produzir mais neutrófilos que normalmente `
        }else{
            res.innerHTML = `<b>Está normal</b>`
        }
    }return(
        <>
            <input type='Submit' value='Mielócitos' onClick={mielocitos}/>
        </>
    )
}

export default Mielocitos