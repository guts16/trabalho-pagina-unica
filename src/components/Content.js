// Content.js
import React, { useState } from 'react';

const Content = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section>
      <h2>Informações sobre Futebol</h2>
      <p>O futebol é o esporte mais popular do mundo!</p>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Mostrar Menos' : 'Mostrar Mais'}
      </button>

      {showDetails && (
        <div>
          <h3>História do Futebol</h3>
          <p>O futebol teve origem no século XIX e desde então tem sido um dos esportes mais assistidos e praticados no mundo inteiro.</p>
          <h3>Principais Times</h3>
          <p>Times como Flamengo, Palmeiras, São Paulo, e Vasco são conhecidos internacionalmente.</p>
        </div>
      )}
    </section>
  );
};

export default Content;
