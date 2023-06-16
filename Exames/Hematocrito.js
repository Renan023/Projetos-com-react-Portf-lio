function Hematocrito(){
    function hematocrito (){
        let valor =document.getElementById(`globverm`)
        let res = document.getElementById(`ref`)
        let v = Number(valor.value)
        if (v > 47){
            res.innerHTML = `<b>O valor de referência de hematócrito está alto pode significar desidratação,
             policitemia, doenças cardíacas ou pulmonares</b>`
        }else if ( v < 36){
            res.innerHTML = `<b>O valor dos hematócritos estão abaixo do normal diminuição das hemácias ou heoglobina no sangue,
             perda excessiva de sangue, doença renal, deficiência de ferro e de proteínas</b>`
        } else{
            res.innerHTML = `<b>Indices normais continue assim, vamos ver os outros exames</b>` 
        }
    }
    return (
        <>
            <input type='Submit' value='Hematocrito' onClick={hematocrito}/>
        </>
    )
}

export default Hematocrito