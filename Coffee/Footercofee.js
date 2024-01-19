import react, {useState, useEffect} from 'react'
import Info from './Info'

function Footercafe(){
    const[saudacaoM,setSaudacaoM]= useState('')
    const[saudacaoE,setSaudacaoE]= useState('')

    useEffect (() =>{
        function calcSaudacao (){
            const time = new Date().getHours()

            if(time>=6 && time <=11){
                return 'manha';
            }else if (time>=12 && time <=17){
                return 'tarde';
            }else if(time>=18 && time <=23){
                return 'noite';
            }else{
                return 'madrugada'
            }
        }

        const saudacaoMomento = calcSaudacao();

        const msg = {
            manha:`Ninguém baterá tão forte, quanto a vida. Porém, não se trata de quão forte pode sse atingido
                   e continuar seguindo em frente. É assim que a vitória é conquistada`,
            tarde:`Quanto mais fortes forem suas provações, maiores serão suas vitórias`,
            noite:`A beleza está em todo o lugar, basta apreciá-la`,
            madrugada:`Um sonho é apenas um desejo até o momento em que você começa a atuar sobre ele, e propõe-se
            a transformá-lo em uma meta`
        }

        const msgE = {
            manha:`Ás vezes tudo o que você precisa é que alguém olhe nós seus olhos e diga: Fiz café para você`,
            tarde:`Três coisas preenchem o meu coração: café, amigos e final de semana!`,
            noite:`A vida é feita de escolhas. Eu escolhi NÃO ficar sem café`,
            madrugada:`Estou ocupado(a), tomando meu café`
        }

        setSaudacaoM(msg[saudacaoMomento])
        setSaudacaoE(msgE[saudacaoMomento])
    },[])

    return(
        <div className='footer'>
            <div className='col'>
                <h3>{saudacaoM}</h3>
            </div>
            <div className='col'>
                <h3>{saudacaoE}</h3>
            </div>
            <div>
                <Info/>
            </div>
        </div>
    )
}

export default Footercafe