import '../style/Index.css'


function Time(){
    let tempo = new Date()
    let hora = tempo.getHours()
    let min = tempo.getMinutes()
    let data = tempo.getDate()
    let mes = tempo.getMonth()+1
    let ano = tempo.getFullYear()
    
    return(
        <div className="time">
            <p>Horário {hora}: {min}<br></br>
            Data {data}/{mes}/{ano}</p>
        </div>
    )


}

export default Time
