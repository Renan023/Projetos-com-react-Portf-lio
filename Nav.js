import './Nav.css';

function Nav(props){
    return(
        <>
            <nav>
                <div className="container">
                <p className="navm">{props.nome}</p>
                </div>           
            </nav>
        </>
    )
}

export default Nav 