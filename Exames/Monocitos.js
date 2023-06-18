function Monocitos (){
    function monocitos(){
        let valor = document.getElementById('leucog')
        let res = document.getElementById('ref1')
        let v = Number(valor.value)
        if (v > 12){
            res.innerHTML = `<b>Se atente com isso, pois os índices estão altos pode ser <u></br>infecção por protozoários 
            </br>Distúrbios autoimunes, de sangue</br>Certos tipos de câncer</b></u>`
        } else if (v < 2){
            res.innerHTML = `<b>Os monócitos estão baixos pode ser</br><u>Infecção sanguinea</br>Quimioterapia</br>
            Distúrbio na médula óssea</u></b>`
        } else {
            res.innerHTML = `<b>Os valores esstão normalizados, mas não pare de se cuidar</b>`
        }
    }return(
        <>
            <input type='Submit' value='Monócitos'onClick={monocitos}/>
        </>
    )
}

export default Monocitos