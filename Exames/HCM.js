function HCM (){
    function hcm (){
        let valor = document.getElementById('globverm')
        let res = document.getElementById('ref')
        let v = Number(valor.value)
        if (v > 34){
            res.innerHTML = `<b>HCM alto indica:</br><u>Verificar a hidratação do paciente</br>Uso de álcool e algus medicamentos</br>
            Alterações da tireoide</br>Aumento das proteinas totais</br>Esferocitose ou eliptocitose</br>Anemia 
            megaloblástica (deficiência de vit. B12 ou ácido fólico)</b></u>`
        }else if(v < 26 ){
            res.innerHTML = `<b>HCM baixo indica:</br><u>Anemia ferropriva</br>Talassemia</br>Anemia por sangramento
            </br>Anemia por má absorção intestinal</b></u>`
        } else{
            res.innerHTML = `<b>HCM normal parabéns, mas verifique os outros exames</b>`
        }
    }
    return(
        <>
            <input type='Submit' value='HCM' onClick={hcm}/>
        </>
    )
}

export default HCM