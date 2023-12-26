import React,{useState} from "react"

function Row(){

    const [msg0,setMsg0]= useState('');
    const [msg1,setMsg1]= useState('');
    const [msg2,setMsg2] = useState('');

    function d1(){
        let m1 = document.getElementById('desc1')
        if(m1.value !==''){
            m1.innerHTML = `<h4>
                                Saiba mais sobre nosso café
                            </h4>   
                            <h4>
                                Atualmente nosso café é de produção própria em diversas fazendas de café pelo continente Americano, 
                                africano, europeu, asiático e Oceania para que possamos selecionar grãos de alta qualidade para você.
                            </h4>`
        }
    }
    function d2(){
        let m2 = document.getElementById('desc2')
        if(m2.value !==''){
            m2.innerHTML = `<h4>
                                Experiência única em nossas lojas
                            </h4>
                            <h4>
                                Nossas lojas não são apenas um refúgio do dia-a-dia e sim um lugar onde 
                                nossos clientes possam se sentir a vontade escutando uma ótima 
                                música e apreciando nosso um excelente café
                            </h4>`
        }
    }
    function d3(){
        let m3 = document.getElementById('desc3')
        if(m3.value!==""){
            m3.innerHTML = `<h4>
                                Ambiente acolhedor feito sob medida para você
                            </h4>
                            <h4>
                                O ambiente é totalmente pensado no seu conforto para seus estudos ou para 
                                que você possa relaxar saboreando nosso café. Então não perca tempo e venha 
                                nos visitar.
                            </h4>`
        }
    }

        function desc1(){
            let m1 = document.getElementById('col1')
            if(m1.value!==''){
                setMsg0(
                    <div id="desc1">
                        <h2>
                            Find out more About our cafe
                        </h2>
                        <h4>
                            Currently our coffee is produced in-house on several coffee farms across the American, African, 
                            European, Asian and Oceanian continents so that we can select high quality beans for you
                        </h4>
                        <input type='Submit' value='Portuguese' id='InputCoffee'onClick={d1}/>
                    </div>
                )
            }
        }
        function desc2(){
            let m2 = document.getElementById('col2')
            if (m2.value !== ''){
                setMsg1(
                    <div id="desc2">
                        <h2>
                            Unique experience in our stores
                        </h2>
                        <h4>
                            Our stores are not just a refuge from everyday life, but a place where
                            our customers can feel comfortable listening to a great
                            music and enjoying our excellent coffee
                        </h4>
                        <input type='submit' value='Portuguese' id='InputCoffee'onClick={d2}/>
                    </div>
                )
            }
        }
        function desc3(){
            let m3 = document.getElementById('col3')
            if (m3.value !==''){
                setMsg2(
                    <div id="desc3">
                        <h2>
                            Cozy atmosphere tailored for you
                        </h2>
                        <h4>
                            The environment is completely designed for your comfort for your studies or for
                            so you can relax by enjoying our coffee. So don't waste time and come
                            visit us
                        </h4>
                        <input type='Submit'value='Portuguese'id="InputCoffee"onClick={d3}/>
                    </div>
                )
            }
        }
            return(
                <div className="row">
                    <div id="col1" className="col">
                        <h2>                    
                            Our coffee
                        </h2>
                        <input type='Submit' value='Know more' id="InputCoffee" onClick={desc1} />
                        {msg0}
                    </div>
                    <div id="col2" className="col">
                        <h2>
                            Our Store
                        </h2>
                        <input type='Submit' value='Know more' id="InputCoffee"onClick={desc2}/>
                        {msg1}
                    </div>
                    <div id='col3' className="col">
                        <h2>
                            Our environment
                        </h2>
                        <input type='Submit' value='Know more' id="InputCoffee"onClick={desc3}/>
                        {msg2}
                    </div>
                </div>
            )
        }

export default Row