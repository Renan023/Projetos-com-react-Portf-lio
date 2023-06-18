function Segmentado(){
    function segmentado (){
        let valor = document.getElementById('leucog')
        let res = document.getElementById('ref1')
        let v = Number(valor.value)
        if (v > 70){
            res.innerHTML = `<b>Seu nível de neutrófilos segmentados está alto fique atento pode ser <u>infecção fúngica</u> ou 
            <u>bacteriana</u></b>`
        }else if(v < 40){
            res.innerHTML= `<b>O nível de segmentados está baixo pode ser <u>infecções, desnutrição, doenças autoimunes, 
            doenças de médula óssea, do baço e tiréoide</u></b>`
        } else{
            res.innerHTML = `<b>Está com níveis normalizados, mas não se descuide </b>`
        }
    }return (
        <>
            <input type='Submit' value='Segmentado' onClick={segmentado}/>
        </>
    )
}

export default Segmentado