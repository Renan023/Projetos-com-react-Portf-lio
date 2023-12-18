function Harmonious(){
    function harmonious (){
        let har = document.getElementById('Hc')
        if(har.value!==""){
            har.innerHTML = `<h4>
                                Café Harmonioso
                            </h4>
                            <h4>
                                Onde Aromas, Amizade e Sustentabilidade Se Entrelaçam em uma Experiência 
                                Imersiva
                            </h4>`
        }

    }return(
            <div className="who">
                <div id="Hc">
                    <h2 >
                        Harmonious Coffee
                    </h2>
                    <h4>
                        Where Aromas, Friendship and Sustainability Intertwine in an Immersive Experience
                    </h4>
                    <input type='Submit' id='InputCoffee'value='Portuguese' onClick={harmonious}/>
                </div>
          </div>
    )
}

export default Harmonious