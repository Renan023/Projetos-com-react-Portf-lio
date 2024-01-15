function Projcof(){
    function projcof(){
        let res = document.getElementById('proj')
        res.innerHTML = `Este é um projeto de uma fake cafeteria, no qual coloco em prática os conhecimentos no 
                        input para dar dar a devolutiva nas condicionais e aos poucos estou 
                        aperfeiçoando este projeto `
    }return(
            <div>
                <input type='Submit' value='Cafeteria'className="input" onClick={projcof}/>
            </div>
    )
}

export default Projcof