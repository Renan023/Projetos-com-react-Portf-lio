import React, { useState } from "react";
import "../styles/ImageTransition.css";

function ImageTransition ({ images }){
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div className={`image-transition-container ${index > 0 ? "hide" : ""}`}>
      <img src={images[index]} alt={`Image ${index + 1}`} />
      <button onClick={nextImage}>Próxima Imagem</button>
    </div>
  );
};

export default ImageTransition;
