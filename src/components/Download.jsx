import React from 'react';
import '../Download.css';

export default function Download() {
  // Array de objetos con diferentes textos para cada tarjeta
  const cards = [
    {
      prompt: "PRIMER PASO",
      title: "Primero presiona el botón de descarga que está abajo 1"
    },
    {
      prompt: "SEGUNDO PASO",
      title: "Ahora selecciona el archivo que deseas descargar 2"
    },
    {
      prompt: "TERCER PASO",
      title: "Confirma la descarga en tu navegador 3"
    },
    {
      prompt: "CUARTO PASO",
      title: "¡Listo! Tu archivo se está descargando 4"
    }
  ];

  return (
    <div className="canvas">
      {cards.map((card, index) => (
        <div className={`container`} key={index}>
          <div className="tracker tr-1"></div>
          <div className="tracker tr-2"></div>
          <div className="tracker tr-3"></div>
          <div className="tracker tr-4"></div>
          <div className="tracker tr-5"></div>
          <div className="tracker tr-6"></div>
          <div className="tracker tr-7"></div>
          <div className="tracker tr-8"></div>
          <div className="tracker tr-9"></div>
          <div id="card">
            <div className="card-content">
              <div className="card-glare"></div>
              <div className="cyber-lines">
                <span></span><span></span><span></span><span></span>
              </div>
              <p id="prompt" className="highlight">{card.prompt}</p>
              <div className="title">{card.title}</div>
              <div className="glowing-elements">
                <div className="glow-1"></div>
                <div className="glow-2"></div>
                <div className="glow-3"></div>
              </div>
              <div className="card-particles">
                <span></span><span></span><span></span><span></span><span></span><span></span>
              </div>
              <div className="corner-elements">
                <span></span><span></span><span></span><span></span>
              </div>
              <div className="scan-line"></div>
            </div>
          </div>
        </div>
      ))}
      <button type="button" class="btn">
        <strong>SPACE</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>

        <div id="glow">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </button>
    </div>
  );
}