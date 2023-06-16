function VCM(){
    function vcm(){
        let valor = document.getElementById('globverm')
        let res = document.getElementById('ref')
        let v = Number(valor.value)
        if (v > 100){
            res.innerHTML = `<b>VCM alto pode indicar hemácias grandes 
            que pode ser indicadores de:</br><u>Anemia perniciosa</br>Anemia megaloblástica</br>Dependência 
            alcoólica</br>Hemorragia</br>Síndrome miedlodisplásica</br>Hipotireoidismo</u></b>`   
        }else if(v<80){
            res.innerHTML = `<b>VCM baixo pode indicar:</br><u>Anemia ferropriva</br>Talassemia menor</br>Esferocitose
            congênita</br>Uremia</br>Infecções crônicas</u></b> `
        }else {
            res.innerHTML = `<b>VCM normal continue se cuidando, se alimentando corretamente e fazendo exercicíos regularmente</b>`
        }
    }
    return (
        <>
            <input type='Submit' value='VCM' onClick={vcm}/>
        </>
    )
}

export default VCM 