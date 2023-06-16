function  Hemoglobina(){
    function hemoglobina(){
        let valor = document.getElementById('globverm')
        let res = document.getElementById('ref')
        let v = Number(valor.value)
        if (v > 16){
            res.innerHTML =`<b>Aumento na hemoglobina pode ser causado em locais de grande altitude, estado de desidratação, 
            menopausa, esforço físico extremo, tabagismo. Pode ser causa de algumas doenças como <u>Policitemia Vera e 
            Policitemia Reacionais</u> `
        } else if (v < 13){
            res.innerHTML = `<b>Hemoglobina baixa pode ser anemia, mulheres em período de menstruação</b> `
        } else {
            res.innerHTML =`<b>Sua taxa de hemoglobina está normal, parabéns continue assim</b>`
        }
    }
    return (
        <>
            <input type='Submit' value='Hemoglobina' onClick={hemoglobina}/>
        </>
    )
}

export default Hemoglobina