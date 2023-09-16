import React from 'react'; // Importa React
import styled from 'styled-components'; // Importa la biblioteca styled-components para estilos

const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Option = styled.img`
  cursor: pointer; // Establece el cursor como puntero al pasar por encima
  margin: 10px; // Margen de 10px alrededor de la imagen
  transition: transform 0.2s; // Agrega una transición de transformación de 0.2 segundos
  width: 40px; // Ancho de 40px
  height: 40px; // Altura de 40px

  &:hover {
    transform: scale(1.1); // Escala la imagen al 110% al hacer hover
  }
`;

function GameOptions({
  handleOptionSelection, // Función para manejar la selección de opción
  playerName,
  maxRounds,
  roundsPlayed,
  updateScore, // Una prop que podría no utilizarse en este componente
}) {
  const options = ['Piedra', 'Papel', 'Tijeras']; // Un arreglo de opciones

  const handleOptionClick = (option) => {
    if (!playerName) {
      alert('Por favor, ingresa tu nombre antes de comenzar el juego.'); // Muestra una alerta si no se proporciona el nombre del jugador
      return;
    }

    if (roundsPlayed < maxRounds) {
      handleOptionSelection(option); // Llama a la función para manejar la selección de opción
    }
  };

  return (
    <OptionsContainer>
      {options.map((option) => (
        <Option
          key={option}
          src={
            option === 'Piedra'
              ? `${process.env.PUBLIC_URL}/images/stone-block_38841.ico`
              : option === 'Papel'
              ? `${process.env.PUBLIC_URL}/images/paper_icon-icons.com_72301.ico`
              : `${process.env.PUBLIC_URL}/images/scissorminimono_105779.ico`
          }
          alt={option}
          onClick={() => handleOptionClick(option)} // Maneja el clic en una opción
        />
      ))}
    </OptionsContainer>
  );
}

export default GameOptions; // Exporta el componente GameOptions como valor predeterminado


