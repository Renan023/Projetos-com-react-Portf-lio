import React, { useState, useEffect } from "react";

function Info() {
  const [infoIndex, setInfoIndex] = useState(0);

  const details = [
    `Rua Baltazar Lisboa, 2467 - Vila Mariana - São Paulo<br/>
    Telefone: (124) 0123- 2345<br/>
    E-mail: info@portfólio`,

    `Horário de atendimento de segunda a sexta das 9:00 até as 21:00<br/>
    e de sábados, domingos e feriados das 10:00 as 18:00`,

    `Servindo desde 2005`,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setInfoIndex((prevIndex) => (prevIndex + 1) % details.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h4 dangerouslySetInnerHTML={{ __html: details[infoIndex] }}></h4>
    </>
  );
}

export default Info;
