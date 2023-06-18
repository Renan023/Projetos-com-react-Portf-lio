function Bastonete(){
    function bastonete(){
        let valor = document.getElementById('leucog')
        let res = document.getElementById('ref1')
        let v = Number(valor.value)
        if (v > 5){
            res.innerHTML = `<b>Pode significar</br><u>Infecção</br>Inflamação aguda</br>Infarto</br>Queimadura</br>
            Estresse</u></b>`
        } else{
            res.innerHTML = `<b>Este exame está normal, porém não se descuide</b>`
        }
    }return(
        <>
            <input type='Submit' value='Bastonete' onClick={bastonete}/>
        </>
    )
}

export default Bastonete