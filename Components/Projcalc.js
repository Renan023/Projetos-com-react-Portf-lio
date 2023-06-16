function Projcalc(){
    function projcalc (){
        let res = document.getElementById('proj')
        res.innerHTML = `Neste projeto de calculadora além de fazer os cálculos básicos normais, realiza também 
        cálculos fatoriais, módulos, equação de segundo grau, regra de três`
    }return(
        <>
            <input type='Submit' value='Calculadora' onClick={projcalc}/>
        </>
    )
}

export default Projcalc