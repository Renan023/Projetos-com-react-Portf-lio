import React,{useState} from 'react'

function Row2(){
    const [msg4,setMsg4]= useState('')
    const [msg5,setMsg5]= useState('')
    const [msg6,setMsg6]= useState('')

    function desc4(){
        let m4 =document.getElementById('col4')
        if(m4.value!==''){
            setMsg4(
                <div id='desc4'>
                    <h2>
                        Customers who are friends, friends who are everything
                    </h2>
                    <h4>
                        In addition to the excellent moments of fun and learning that you offer us. Your 
                        positive and negative feedbacks are very important for our improvement and evolution.
                        So that we can bring a comfortable and more cozy place for you
                    </h4> 
                    <input type='Submit' value='Portuguese'  id='InputCoffee'onClick={d4}/>
                </div>
            )
        }
    }
        function desc5(){
            let m5 = document.getElementById('col5')
            if (m5.value !==''){
                setMsg5(
                <div id='desc5'>
                    <h2>
                        Exclusive and personalized service
                    </h2>
                    <h4>
                        Our drinks are prepared in a way that makes our customers feel valued and unique. 
                        Because each drink is specially made to make you feel at home.
                    </h4>
                    <input type='Submit' value='Portuguese' id='InputCoffee'onClick={d5}/>
                </div>
            )
        }
    }  
    function desc6(){
        let m6 = document.getElementById('col6')
        if (m6.value !==''){
            setMsg6(
                <div id='desc6'>
                    <h2>
                        Recycling is winning. Come make a difference!!
                    </h2>
                        <h4>
                            Every Sunday we hold workshops with recyclable materials and with the intention of 
                            contributing to the environment and with this in mind we have a points program based 
                            on recyclables in which the customer will bring their recyclable waste and earn points 
                            to exchange for some prize or discount( see regulation)
                        </h4>
                        <input type='Submit' value='Portuguese' id='InputCoffee'onClick={d6}/>
                </div>
            )
        }
    }  

        function d4(){
            let m4 = document.getElementById('desc4')
            if (m4.value !==''){
                m4.innerHTML = `<h4>
                                    Clientes que são amigos, amigos que são tudo  
                                </h4>
                                <h4>
                                    Além de excelentes momentos de diversão e aprendizados em que vocês  
                                    nos oferecem. Seus feedbacks  positivos e negativos são muito importantes 
                                    para nossa melhoria e evolução.
                                    Para que possamos trazer um local confortável e mais aconchegante para você.
                                </h4>`
            }
        }
        function d5(){
            let m5 = document.getElementById('desc5')
            if(m5.value!==''){
                m5.innerHTML = `<h4>
                                    Atendimento exclusivo  e personalizado 
                                </h4>
                                <h4>
                                    Nossas bebidas são preparadas de forma em que nossos clientes se sintam 
                                    valorizados e únicos. Pois cada bebida é feita especialmente para que você 
                                    se sinta em casa.
                                </h4>`
            }
        }
        function d6(){
            let m6 = document.getElementById('desc6')
            if (m6.value!==''){
                m6.innerHTML = `<h4>
                                    Reciclar é ganhar. Venha fazer a diferença!!
                                </h4>
                                <h4>
                                    Todos os domingos realizamos workshops com materiais recicláveis e com a 
                                    intenção de contribuir com o meio ambiente e pensando nisso temos um 
                                    programa de pontos com base nos recicláveis em que o cliente irá trazer
                                     seu lixo reciclável e ganhar pontos para trocar com alguma premiação ou 
                                     desconto(consulte o regulamento).
                                </h4>`
            }
        }
    return(
        <div>
            <div className="row">
                <div id="col4" className="col">
                    <h2>
                        Our clients
                    </h2>
                    <input type='Submit'value='Know more' id="InputCoffee"onClick={desc4}/>
                    {msg4}
                </div>
                <div id='col5' className="col">
                    <h2>
                        Our service
                    </h2>
                    <input type='Submit' value='Know more' id="InputCoffee"onClick={desc5}/>
                    {msg5}
                </div>
                <div id='col6' className="col">
                    <h2>
                        Ours current projects
                    </h2>
                    <input type='Submit' value='Know more' id="InputCoffee"onClick={desc6}/>
                    {msg6}
                </div>
            </div>
        </div>
    )
}

export default Row2