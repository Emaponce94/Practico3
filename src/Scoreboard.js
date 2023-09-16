import React from 'react'; // Importa React
import styled from 'styled-components'; // Importa styled-components para el estilo

const ScoreContainer = styled.div`
  margin-top: 20px;
`;

const ScoreItem = styled.p`
  font-size: 18px;
  
  span {
    font-weight: bold;
  }
`;

function Scoreboard({ playerScore, pcScore, draws }) {
  return (
    <ScoreContainer>
      <ScoreItem>Jugador: <span>{playerScore}</span></ScoreItem> {/* Muestra la puntuación del jugador */}
      <ScoreItem>PC: <span>{pcScore}</span></ScoreItem> {/* Muestra la puntuación de la computadora */}
      <ScoreItem>Empates: <span>{draws}</span></ScoreItem> {/* Muestra el número de empates */}
    </ScoreContainer>
  );
}

export default Scoreboard; // Exporta el componente Scoreboard como valor predeterminado
