import '../style/Index.css'
import {Link} from 'react-router-dom';

function Nav(props){
    return(
        <>
            <nav className="container">
                <Link to='/'>
                <h1 className="navm">{props.nome}</h1>
                </Link>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/calculator">Calculadora</Link>
                    </li>
                    <li>
                        <Link to="/exames">Hemograma</Link>
                    </li>
                    <li>
                        <Link to="/form">Formulário</Link>
                    </li>
                    <li>
                        <Link to="/coffeeco">Coffee Co</Link>
                    </li>
                </ul>
                </nav>
        </>
    )
}

export default Nav 