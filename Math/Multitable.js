function Multitable(){
    function tabuada(){
        let n = document.getElementById(`numero5`)
        let res = document.getElementById(`resultado2`)
        let c = 1
        let v = Number(n.value)
        res.innerHTML = ``
        while(c<=10){
            let item = document.createElement(`option`)
            item.innerHTML = `${v} X ${c} = ${v*c}`
            res.value = `res${c}`
            res.appendChild(item)
            c++
        }
    }
    return (
        <>
            <input type='Submit' value='Tabuada' onClick={tabuada}/>
        </>
        
    )
}

export default Multitable