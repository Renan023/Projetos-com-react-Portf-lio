import './Nav.css'
import {Link} from 'react-router-dom';

function Nav(props){
    return(
        <>
            <nav className="container">
                <h1 className="navm">{props.nome}</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/calculator">Calculadora</Link>
                    </li>
                    <li>
                        <Link to="/saude">Saúde</Link>
                    </li>
                </ul>
                </nav>
        </>
    )
}

export default Nav 