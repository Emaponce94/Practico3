import React from 'react'; // Importa React
import styled from 'styled-components'; // Importa la biblioteca styled-components para estilos

const ResultsContainer = styled.div`
  margin-top: 20px; // Establece un margen superior de 20px
`;

function GameResults({ results }) {
  return (
    <ResultsContainer>
      <p>{results}</p> {/* Renderiza el valor de "results" dentro de un párrafo */}
    </ResultsContainer>
  );
}

export default GameResults; // Exporta el componente GameResults como valor predeterminado
