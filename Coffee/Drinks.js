function Drinks(){
    function Bebidas(){
        let bebidas = document.getElementById('drinks')
        if (bebidas.value !==""){
            bebidas.innerHTML = `
                                <h2>
                                    Bebidas feitas com paixão: Experimente nossas bebidas
                                </h2>
                                <h2>
                                    Nossa Dedicação em Cada Sobremesa: Feitas com Amor e Entusiasmo
                                </h2>`
        }
    }
    return(
        <div className="text" >
            <div id="drinks">
            <h2>
                Drinks made with passion: Try our drinks
            </h2>
            <h2>
                Our Dedication in Each Dessert: Made with Love and Enthusiasm
            </h2>
            <input type='Submit' value='Portuguese'id='InputCoffee'onClick={Bebidas}/>
            </div>
        </div>
    )
}

export default Drinks