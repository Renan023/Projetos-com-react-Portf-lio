import '../style/Index.css'
import {FaLinkedin,FaGithub,FaInstagram} from 'react-icons/fa'

function Footer(){

return(
    <footer className='rodape'>
        <ul>
            <li className='gith'><FaGithub/></li>
            <li className='linked'><FaLinkedin/></li>
            <li className='inst'><FaInstagram/></li>
        </ul>
    </footer>
)
}
export default Footer 