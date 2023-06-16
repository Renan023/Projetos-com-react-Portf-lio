function RDW(){
    function rdw(){
        let valor = document.getElementById('globverm')
        let res = document.getElementById('ref')
        let v = Number(valor.value)
        if (v > 15){
            res.innerHTML = `<b>RDW alto o que pode significar:<u></br>Diabetes</br>Doença hepática crônica</br>
            Câncer</br>Doenças crônicas</u></b>`
        }else if(v < 11){
            res.innerHTML = `<b>RDW baixo pode ser:<u></br>HIV</br>problemas hepáticos</br>Câncer</br>
            Diabetes</br>Doenças autoimunes</br>Talassemia heterozigótica</b> `
        }else{
            res.innerHTML = `<b>RDW normal mantenha desse jeito</b>`
        }
    }
        return (
            <>
                <input type='Submit' value='RDW' onClick={rdw}/>
            </>
        )
}

export default RDW