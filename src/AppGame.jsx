import React, { useState, useEffect } from 'react'; // Importa React y los hooks useState y useEffect de la biblioteca React

import GameOptions from './GameOptions'; // Importa el componente GameOptions desde un archivo llamado GameOptions.js
import GameResults from './GameResults'; // Importa el componente GameResults desde un archivo llamado GameResults.js
import Scoreboard from './Scoreboard'; // Importa el componente Scoreboard desde un archivo llamado Scoreboard.js
import Modal from './Modal'; // Importa el componente Modal desde un archivo llamado Modal.js
import ResultModal from './ResultModal'; // Importa el componente ResultModal desde un archivo llamado ResultModal.js
import CustomButton from './CustomButton'; // Importa el componente CustomButton desde un archivo llamado CustomButton.js 
import AppContainer from './AppContainer'; // Importa el componente AppContainer desde un archivo llamado AppContainer.js
import ContentContainer from './ContentContainer'; // Importa el componente ContentContainer desde un archivo llamado ContentContainer.js

function AppGame() {
  // Declaración de múltiples estados utilizando useState
  const [maxRounds, setMaxRounds] = useState(5); // Estado para el número máximo de rondas
  const [roundsPlayed, setRoundsPlayed] = useState(0); // Estado para el número de rondas jugadas
  const [playerScore, setPlayerScore] = useState(0); // Estado para la puntuación del jugador
  const [pcScore, setPcScore] = useState(0); // Estado para la puntuación de la computadora
  const [draws, setDraws] = useState(0); // Estado para el número de empates
  const [results, setResults] = useState('Elige una opción para empezar.'); // Estado para mostrar los resultados
  const [showModal, setShowModal] = useState(true); // Estado para mostrar el modal
  const [playerName, setPlayerName] = useState(''); // Estado para el nombre del jugador
  // eslint-disable-next-line no-unused-vars
  const [gameStarted, setGameStarted] = useState(false); // Estado para indicar si el juego ha comenzado
  // eslint-disable-next-line no-unused-vars
  const [playerOption, setPlayerOption] = useState(''); // Estado para la opción seleccionada por el jugador
  const [showResultModal, setShowResultModal] = useState(false); // Estado para mostrar el modal de resultados

  // Función para manejar el cambio en el nombre del jugador
  // eslint-disable-next-line no-unused-vars
  const handleNameChange = (event) => {
    setPlayerName(event.target.value); // Actualiza el estado playerName con el valor del campo de entrada.
  };
  
  // Función para cerrar el modal
  // eslint-disable-next-line no-unused-vars
  const closeModal = () => {
    setShowModal(false); // Establece el estado showModal como falso para cerrar el modal.
  };
  
  // Función para mostrar el resultado
  const showResult = (message) => {
    setResults(message); // Actualiza el estado results con un mensaje.
    setShowResultModal(true); // Establece el estado showResultModal como verdadero para mostrar el modal de resultados.
  };
  
  // Función para iniciar el juego
  const startGame = (name) => {
    if (name.trim() !== '') {
      setPlayerName(name); // Actualiza el estado playerName con el nombre proporcionado.
      setGameStarted(true); // Establece el estado gameStarted como verdadero para indicar que el juego ha comenzado.
      setShowModal(false); // Establece el estado showModal como falso para cerrar el modal.
    } else {
      alert('Por favor, ingresa tu nombre.'); // Muestra una alerta si no se proporciona un nombre válido.
    }
  };
  
  // Función para manejar la selección de opción
  const handleOptionSelection = (option) => {
    if (roundsPlayed < maxRounds) {
      const pcOption = ['Piedra', 'Papel', 'Tijeras'][Math.floor(Math.random() * 3)];
  
      if (option === pcOption) {
        setDraws(draws + 1); // Incrementa el número de empates si la opción del jugador y la de la computadora son iguales.
      } else if (
        (option === 'Piedra' && pcOption === 'Tijeras') ||
        (option === 'Papel' && pcOption === 'Piedra') ||
        (option === 'Tijeras' && pcOption === 'Papel')
      ) {
        setPlayerScore(playerScore + 1); // Incrementa la puntuación del jugador si gana la ronda.
      } else {
        setPcScore(pcScore + 1); // Incrementa la puntuación de la computadora si gana la ronda.
      }
  
      setRoundsPlayed(roundsPlayed + 1); // Incrementa el número de rondas jugadas.
      setPlayerOption(option); // Actualiza la opción seleccionada por el jugador.
    }
  };
  
  // Función para reiniciar el juego
  const resetGame = () => {
    setPlayerName(''); // Restablece el nombre del jugador.
    setMaxRounds(5); // Restablece el número máximo de rondas a 5.
    setRoundsPlayed(0); // Restablece el número de rondas jugadas a 0.
    setPlayerScore(0); // Restablece la puntuación del jugador a 0.
    setPcScore(0); // Restablece la puntuación de la computadora a 0.
    setDraws(0); // Restablece el número de empates a 0.
    setResults('Elige una opción para empezar.'); // Restablece los resultados a un mensaje inicial.
    setShowModal(true); // Muestra el modal nuevamente.
    setGameStarted(false); // Establece gameStarted como falso para indicar que el juego no ha comenzado.
  };
  
  // Efecto secundario que se ejecuta cuando se cumplen ciertas condiciones
  useEffect(() => {
    if (roundsPlayed === maxRounds) {
      let message = '';
      if (playerScore > pcScore) {
        message = `¡Felicitaciones, ${playerName}! ¡Has ganado el juego!`;
      } else if (playerScore < pcScore) {
        message = `Game Over, lo siento ${playerName}, el PC ganó el juego.`;
      } else {
        message = `La partida terminó en empate, ${playerName}.`;
      }
      showResult(message); // Muestra el mensaje de resultado al finalizar todas las rondas.
    }
  }, [roundsPlayed, maxRounds, playerName, playerScore, pcScore]);
  
  // Componente principal que renderiza la aplicación
  return (
    <AppContainer>
      {/* Renderiza el componente AppContainer, que envuelve todo el contenido de la aplicación */}
      <ContentContainer>
        {/* Renderiza el componente ContentContainer, que contiene todo el contenido principal de la aplicación. */}
        {showModal && (
          /* Renderiza el componente Modal si showModal es verdadero, lo que muestra el modal de inicio de juego. */
          <Modal startGame={startGame} closeModal={() => setShowModal(false)} />
        )}
        <h1>Piedra, Papel o Tijera</h1>

        <div className="player-name">
          {/* Inicia un contenedor para mostrar el nombre del jugador. */}
          <label htmlFor="name">Nombre del Jugador: {playerName}</label>
          {/* Etiqueta que muestra el nombre del jugador. */}
        </div>
        <label htmlFor="rounds">Número máximo de partidas:</label>
        {/* Etiqueta para configurar el número máximo de rondas. */}
        <input
          type="number"
          id="rounds"
          min="1"
          max="5"
          value={maxRounds}
          onChange={(event) => setMaxRounds(Number(event.target.value))}
        />
        {/* Renderiza un campo de entrada numérico para configurar el número máximo de rondas. onChange actualiza el estado maxRounds con el valor ingresado. */}
        <GameOptions
          handleOptionSelection={handleOptionSelection}
          playerName={playerName}
          maxRounds={maxRounds}
          roundsPlayed={roundsPlayed}
        />
        {/* Renderiza el componente GameOptions y pasa algunas propiedades para su funcionamiento. */}
        <GameResults results={results} />
        {/* Renderiza el componente GameResults y muestra los resultados del juego. */}
        <Scoreboard playerScore={playerScore} pcScore={pcScore} draws={draws} />
        {/* Renderiza el componente Scoreboard y muestra la puntuación del jugador y la computadora, así como el número de empates. */}
        <CustomButton onClick={resetGame}>Reiniciar Juego</CustomButton>
        {/* Renderiza un botón personalizado que llama a la función resetGame cuando se hace clic en él. */}
        {showResultModal && (
          /* Renderiza el componente ResultModal si showResultModal es verdadero, lo que muestra el modal de resultados al final del juego. */
          <ResultModal
            showResultModal={showResultModal}
            resultMessage={results}
            closeModal={() => setShowResultModal(false)}
          />
        )}
      </ContentContainer>
    </AppContainer>
  );
}
export default AppGame;
