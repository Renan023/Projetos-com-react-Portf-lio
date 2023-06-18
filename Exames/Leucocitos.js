function Leucocitos(){
    function leucocitos(){
    let valor = document.getElementById('leucog')
    let res = document.getElementById('ref1')
    let v = Number(valor.value)
    if (v > 11000){
        res.innerHTML = `<b>Leucocitos alto pode ser causado por uma infecção bacteriana, leucemia, traumatismo,
        exercícios intensos ou estresse</b>`
    } else if( v < 4000){
        res.innerHTML = `<b>Leucócitos baixo pode ser por infecção, desnutrição, doenças auto imunes,
        doença de médula óssea, baço e tireóide. Em alguns casos pode ser por tratamento de 
        quimioterapia e radioterapia</b>`
    } else{
        res.innerHTML=`<b>Parabéns, mas não se descuide</b>`
    }
}
    return (
        <>
            <input type='Submit' value='Leucócitos' onClick={leucocitos}/>
        </>
    )
}

export default Leucocitos