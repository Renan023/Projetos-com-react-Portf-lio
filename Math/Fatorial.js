function Fatorial(){
    function fatorial(){
        let n = document.getElementById(`numero5`)
        let res = document.getElementById(`resultado2`)
        let v = Number(n.value)
        let fat = v
            for(let i = 1;i<v;i++){
                fat *=i;
            }
            res.innerHTML = `O fatorial do valor ${v} é ${fat}`
    }
    return(
        <>
            <input type='Submit' value='Fatorial' onClick={fatorial}/>

        </>
    )
}

export default Fatorial