import React from 'react'; // Importa React
import styled from 'styled-components'; // Importa styled-components para el estilo

const ModalContainer = styled.div`
  display: ${(props) => (props.showResultModal ? 'block' : 'none')}; // Controla la visibilidad del modal basado en la prop showResultModal
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // Fondo semitransparente
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center; /* Centra verticalmente el contenido del modal */
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); // Sombra ligera
`;

const CustomButton = styled.button`
  background-color: #007bffce;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0d5badcc; // Cambio de color al pasar el mouse
  }
`;

function ResultModal({ showResultModal, closeModal, resultMessage }) {
  return (
    <ModalContainer showResultModal={showResultModal}>
      <ModalContent>
        <p>{resultMessage}</p> {/* Muestra el mensaje de resultado */}
        <CustomButton onClick={closeModal}>OK</CustomButton> {/* Botón OK para cerrar el modal */}
      </ModalContent>
    </ModalContainer>
  );
}

export default ResultModal; // Exporta el componente ResultModal como valor predeterminado


