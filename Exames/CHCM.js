function CHCM(){
    function chcm(){
        let valor = document.getElementById('globverm')
        let res = document.getElementById('ref')
        let v = Number(valor.value)
        if(v > 36){
            res.innerHTML = `<b>CHCM alto tem que tomar <u>cuidado com as bebidas alcoólicas e problema na tireoide
            ou anemia hipercrômica</u>.</b>`
        } else if(v <31){
            res.innerHTML = `<b>CHCM baixo pode ser <u>anemia hipocrômica</u> ou alguma outra condição como 
            <u>cirrose, linfoma, insuficiência renal, hipotiroidismo, medicamentos para tratamento de AIDS, 
            talassemia, disturbios na coagulação</u></b>`
        }else{
            res.innerHTML = `<b>Ótimo seu CHCM está normal, mas não se descuide mantenha os cuidados com sua saúde</b>`
        }
    }
    return(
        <>
            < input type='Submit' value='CHCM' onClick={chcm}/>
        </>
    )
}

export default CHCM 