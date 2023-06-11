import '../style/Index.css'

function Title (props){
    
    return(

        <div className='main'>
            <h1 id='frase'>{props.title}</h1>
        </div>
    )
}


export default Title