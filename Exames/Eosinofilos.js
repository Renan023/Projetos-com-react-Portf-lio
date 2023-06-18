function Eosinfilos(){
    function eosinofilos(){
        let valor = document.getElementById('leucog')
        let res = document.getElementById('ref1')
        let v = Number(valor.value)
        if (v > 5){
            res.innerHTML = `<b>Sua taxa de eosinófilos está acima do normal pode ser infecção parasitária, doença alérgica ou 
            asma</b>`
        } else if( v < 1){
            res.innerHTML = `<b>Os eosinófilos está abaixo tome cuidado </b>`
        } else {
            res.innerHTML = `<b>Continue se cuidando<b>`
        }
    }return(
        <>
            <input type='Submit' value='Eosinófilos' onClick={eosinofilos}/>
        </>
    )
}

export default Eosinfilos