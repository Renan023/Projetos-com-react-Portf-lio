import '../style/Index.css'
import Title from '../Components/Title'
import Projcalc from '../Components/Projcalc'
import Projexam from '../Components/Projexam'
import Projcof from '../Components/projcof'

function Home(){

    return (
        <div className="Home">
            <Title title='Home'/>
            <h4>Este aqui é o meu projeto portfólio usando HTML, CSS e Javascript usando o meu aprendizado <br></br>
            com o ReactJs, no qual vou inserir alguns projetos <br></br>
            e aplicando a minha melhora quanto ao uso desta tecnologia </h4>
            <h4>LinkedIn:<u> https://www.linkedin.com/in/renaneizo1707/</u></h4>
            <h4>GitHub: <u>https://github.com/Renan023/</u> veja os meus outros projetos </h4>
            <h4>Estarei em breve fazendo uma conta no instagram com o vídeo dos meus<br></br>
             projetos </h4>
            <h4>Fique a vontade para curia <br></br></h4>
            <h4>Nos botões abaixo está uma breve descrição dos projetos já criados ou em construção</h4>
            <div>
                <Projcalc/>
                <Projexam/>
                <Projcof/>
            </div>
            <div id='proj' className='proj'>

            </div>
        </div>
    )
}

export default Home