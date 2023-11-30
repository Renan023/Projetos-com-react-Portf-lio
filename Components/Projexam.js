function Projexam (){
    function projexam(){
        let res = document.getElementById('proj')
        res.innerHTML = `Aqui vai ser apresentado de uma forma genérica exame como o hemograma, colocando em prática as condicionais
                        if-else`
    } return(
        <>
            <input type='Submit' value='Hemograma' onClick={projexam}/>
        </>
    )
}

export default Projexam