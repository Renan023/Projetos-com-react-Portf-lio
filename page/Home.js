import '../style/Index.css'
import Title from '../Components/Title'
import Projcalc from '../Components/Projcalc'
import Projexam from '../Components/Projexam'

function Home(){

    return (
        <div className="Home">
            <Title title='Home'/>
            <h4>Este aqui é o meu projeto portfólio usando HTML, CSS e Javascript usando o meu aprendizado <br></br>
            com o ReactJs, no qual vou inserir alguns projetos como calculadora, índices de exame na saúde mostrando <br></br>
            e aplicando a minha melhora quanto ao uso desta tecnologia </h4>
            <h4>No momento só estarei disponibilizando e construindo a calculadora e a parte da exames </h4>
            <h4>LinkedIn:<u> https://www.linkedin.com/in/renaneizo1707/</u></h4>
            <h4>GitHub: <u>https://github.com/Renan023/</u> veja os meus outros projetos </h4>
            <h4>Estou fazendo em breve uma conta no instagram com o vídeo dos meus<br></br>
             projetos </h4>
            <h4>Fique a vontade para curia <br></br></h4>
            <h4>Nos botões abaixo está uma breve descrição dos projetos mencionados</h4>
            <div>
                <Projcalc/>
                <Projexam/>
            </div>
            <div id='proj' className='proj'>

            </div>
        </div>
    )
}

export default Home