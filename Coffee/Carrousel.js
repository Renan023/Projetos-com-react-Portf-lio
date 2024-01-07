import React, {useState} from "react"

function Carroussel({images}){
        const [currentIndex,setCurrentIndex] = useState(0);
    
        const nextSlide =() =>{
            setCurrentIndex((currentIndex + 1) % images.length)
        }

        const prevSlide = ()=>{
            setCurrentIndex((currentIndex - 1 + images.length)%images.length) 
        }
    
    return(
        <div className="carousel">
            <button className="prev" onClick={prevSlide}>&lt;</button>
            <img className="carousel-img" src={images[currentIndex]}alt={`${currentIndex+1}`}/>
            <button className="next" onClick={nextSlide}>&gt;</button>
        </div>
    )
}

export default Carroussel