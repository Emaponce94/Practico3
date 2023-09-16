import React, { useState } from 'react'; // Importa React y el hook useState
import './Modal.css'; // Importa los estilos CSS del modal

const Modal = ({ startGame, closeModal }) => {
  const [name, setName] = useState(''); // Declara el estado "name" para almacenar el nombre del jugador

  const handleNameChange = (event) => {
    setName(event.target.value); // Actualiza el estado "name" con el valor del campo de entrada
  };

  const handleStartGame = () => {
    if (name.trim() !== '') {
      // Verifica si se ingresó un nombre válido (sin espacios en blanco)
      startGame(name); // Inicia el juego con el nombre proporcionado
      closeModal(); // Cierra el modal después de iniciar el juego
    } else {
      alert('Por favor, ingresa tu nombre.'); // Muestra una alerta si no se proporciona un nombre válido
    }
  };

  return (
    <div className="modal">
  <div className="modal-content">
    <h2>Bienvenido a Piedra, Papel o Tijeras</h2>
    <p>¡Es hora de poner a prueba tus habilidades contra la computadora!</p>
    <p>Selecciona una de las tres opciones: Piedra, Papel o Tijeras en cada ronda.</p>
    <p>Observa los resultados y demuestra que eres el mejor.</p>
    <p>Ingresa tu nombre para comenzar:</p>
    <input
      type="text"
      placeholder="Nombre"
      value={name}
      onChange={handleNameChange}
    />
    <button onClick={handleStartGame}>OK</button>
  </div>
</div>
  );
};

export default Modal; // Exporta el componente Modal como valor predeterminado

