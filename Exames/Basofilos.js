function Basofilos (){
    function basofilos (){
        let valor = document.getElementById('leucog')
        let res = document.getElementById('ref1')
        let v = Number(valor.value)
        if (v > 1){
            res.innerHTML = `<b>A taxa de Basófilos está alta pode ser inflamações ou alergia 
            <u></br>Pode ser descoberto no leucograma</u></b>`
        }else{
            res.innerHTML = `<b>Sua taxa de basófilos está normal continue assim`
        }
    } return (
        <>
            <input type='Submit' value='Basófilos' onClick={basofilos}/>
        </>
    )
}

export default Basofilos