import styled from 'styled-components'; // Importa la biblioteca styled-components para crear estilos CSS en componentes React

const AppContainer = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/images/wallpaperbetter.jpg); {/* Establece una imagen de fondo utilizando una URL dinámica*/}
  background-size: cover; {/* Establece el tamaño de la imagen de fondo para cubrir todo el contenedor*/}
  background-repeat: no-repeat; /Evita la repetición de la imagen de fondo
  background-attachment: fixed; // Fija la imagen de fondo en su lugar mientras se desplaza el contenido
  background-position: center; // Coloca la imagen de fondo en el centro del contenedor
  display: flex; // Establece el comportamiento de visualización flexible para los elementos hijos
  justify-content: center; // Centra horizontalmente los elementos hijos dentro del contenedor
  align-items: center; // Centra verticalmente los elementos hijos dentro del contenedor
  height: 100vh; // Establece la altura del contenedor al 100% del alto de la ventana (viewport)
`;

export default AppContainer; // Exporta el componente estilizado AppContainer para su uso en otros archivos