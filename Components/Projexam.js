function Projexam (){
    function projexam(){
        let res = document.getElementById('proj')
        res.innerHTML = `Aqui vai ser apresentado de uma forma genérica alguns tipos de exames clínicos `
    } return(
        <>
            <input type='Submit' value='Exames' onClick={projexam}/>
        </>
    )
}

export default Projexam