import './Title.css'

function Title (props){
    
    return(

        <div className="principal">
            <h1 className='frase'>{props.title}</h1>
        </div>
    )
}


export default Title