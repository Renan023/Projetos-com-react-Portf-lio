import React, {useEffect,useState} from "react";
import people from'../image/people.jpg'
import View from '../image/viewup.jpg'
import Environment from '../image/environment.jpg'

function AutomaticImg (){
    const [Img, setImg] = useState(View)

    const ChangeImg =() =>{
        if (Img === View){
            setImg(people)
        }else if (Img === people){
            setImg(Environment)
        }else {
            setImg(View)
        }
    }
    useEffect(()=>{
        const interval = setInterval(ChangeImg,6000)

        return()=> clearInterval(interval)
    },[ChangeImg, Img])
    return(
        <div id="img">
            <img src={Img} alt='Imagem Dinamica' />
        </div>
    )
}

export default AutomaticImg
