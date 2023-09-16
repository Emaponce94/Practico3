// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'; // Importa React y algunos hooks de React (useState y useEffect)
import './App.css'; // Importa el a
import styled from 'styled-components'; // Importa la biblioteca styled-components para estilizar componentes
// eslint-disable-next-line no-unused-vars
import AppGame from './AppGame'; // Importa un componente llamado AppGame en el que se aloja la logica completa de la App react

// eslint-disable-next-line no-unused-vars
const ResultModalContainer = styled.div`
  display: ${(props) => (props.showResultModal ? 'block' : 'none')};  // Define un componente estilizado usando styled-components que controla su visibilidad basado en la prop showResultModal
  position: fixed; // Establece la posición del elemento fija
  top: 0; // Establece la posición en la parte superior de la ventana
  left: 0; // Establece la posición en la parte izquierda de la ventana
  width: 100%; // Establece el ancho al 100% de la ventana
  height: 100%; // Establece la altura al 100% de la ventana
  background-color: rgba(0, 0, 0, 0.5); // Establece el color de fondo con un fondo semitransparente
  z-index: 9999; // Establece el índice z para controlar la superposición con otros elementos
  display: flex; // Establece el comportamiento de visualización flexible para los elementos hijos
  justify-content: center; // Centra horizontalmente los elementos hijos
  align-items: center; // Centra verticalmente los elementos hijos
`;

// eslint-disable-next-line no-unused-vars
const ResultModalContent = styled.div`

  background-color: white; // Establece el color de fondo del componente a blanco //
  padding: 20px;  //Agrega espacio de relleno alrededor del contenido del componente //
  border-radius: 10px; // Establece un radio de borde redondeado para el componente
  text-align: center;  // Centra el texto dentro del componente
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);  // Agrega una sombra al componente
`;


