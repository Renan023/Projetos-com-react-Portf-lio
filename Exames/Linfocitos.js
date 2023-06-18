function Linfocitos(){
    function linfocitos(){
        let valor = document.getElementById('leucog')
        let res = document.getElementById('ref1')
        let v = Number(valor.value)
        if ( v > 40){
            res.innerHTML = `<b>A taxa de linfócitos está alta pode ser infecção bacteriana ou viral.
            Porém tome cuidado se estiver muito elevado pode ser problemas mais sérios como<u></br>Hepatite</br>
            Mieloma</br>Leucemia</br>Linfoma</u></b>`
        }else  if (v < 20){
            res.innerHTML = `<b>Se a taxa de linfócitos estiver baixa se atente com</br><u>HIV, tuberculose ou hepatite
            </br>Leucemia</br>Doença autoimune</u></b> `
        }else {
            res.innerHTML = `<b>Sua taxa está normal, porém não se descuide</b>`
        }
    }return(
        <>
            <input type='Submit' value='Linfócitos'onClick={linfocitos}/>
        </>
    )
}

export default Linfocitos