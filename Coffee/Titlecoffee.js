import '../style/Index.css'

function TitleCoffee (props){
    
    return(

        <div className='maincoffee'>
            <h1 id='frase'>{props.title}</h1>
        </div>
    )
}


export default TitleCoffee