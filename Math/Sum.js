function Sum(){
    function soma(){

            let n1 = document.getElementById(`numero`)
            let n2 = document.getElementById(`numero1`)
            let res = document.getElementById(`resultado`)
            let v1 = Number(n1.value)
            let v2 = Number(n2.value)
            let s = v1+v2
            res.innerHTML = `A soma é ${s}`
        }
    
    return(
            
            <input type="Submit" value= "Soma" onClick={soma}/>
        
    )
}

export default Sum