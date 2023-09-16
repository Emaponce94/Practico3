# Juego de Piedra, Papel o Tijeras

Bienvenido al juego de Piedra, Papel o Tijeras. ¡Es hora de poner a prueba tus habilidades y vencer a la computadora!

## Acerca del Juego

Este juego es una versión digital del clásico juego de Piedra, Papel o Tijeras. El objetivo es simple: elige una de las tres opciones (Piedra, Papel o Tijeras) en cada ronda y compite contra la computadora. Cada ronda tiene un ganador, y el jugador que gane más rondas será el ganador general del juego.

## Cómo Jugar

1. Inicia el juego ingresando tu nombre.
2. Elige el número máximo de rondas que deseas jugar.
3. Selecciona Piedra, Papel o Tijeras en cada ronda.
4. Observa los resultados y comprueba quién gana cada ronda.
5. Al final del juego, se mostrará el resultado final.

## Tecnología Utilizada

Esta aplicación se ha creado utilizando las siguientes tecnologías:

- **React**: Una biblioteca de JavaScript para construir interfaces de usuario interactivas. [Más información](https://reactjs.org/)
- **Styled-Components**: Una biblioteca para aplicar estilos a componentes de React mediante CSS en JS. [Más información](https://styled-components.com/)
- **HTML y CSS**: Para la estructura y los estilos visuales de la aplicación.
- **JavaScript**: Para la lógica del juego y las interacciones del usuario.
## Codigo
App.js: Este archivo es el punto de entrada principal de la aplicación. Contiene la estructura principal de la aplicación, como el encabezado y el contenedor principal. También renderiza el componente AppGame, que es el componente principal del juego.

1. AppGame.js: El componente principal del juego. Aquí se gestiona toda la lógica del juego, desde la selección de opciones hasta el cálculo de los resultados y el control del flujo del juego.

2. GameOptions.js: Este componente se encarga de mostrar las opciones de juego al jugador y de manejar la selección de las mismas. Recibe las opciones y el estado del juego y llama a la función de manejo cuando el jugador elige una opción.

3. GameResults.js: Muestra los resultados del juego, como el mensaje de quién ganó o si hubo un empate. Recibe los resultados como propiedades y los muestra en la interfaz de usuario.

4. Scoreboard.js: Muestra la puntuación actual del jugador y la computadora, así como el número de empates. Recibe esta información como propiedades y la presenta de manera legible para el jugador.

5. Modal.js: Este componente representa el modal de inicio del juego. Permite al jugador ingresar su nombre antes de comenzar a jugar y proporciona un mensaje de bienvenida e instrucciones.

6. ResultModal.js: Es el modal que se muestra al finalizar el juego, mostrando el resultado final y ofreciendo la opción de reiniciar el juego.

7. CustomButton.js: Un componente personalizado para botones que se utiliza en varias partes de la aplicación.

8. AppContainer.js y ContentContainer.js: Componentes que se encargan del diseño y estructura de la aplicación, como contenedores principales.

9. index.js: El archivo de entrada principal que inicia la aplicación React y lo conecta al punto de entrada del HTML.

10. Modal.css: Archivo de hoja de estilo CSS para estilizar el componente Modal.

11. Scoreboard: muestra la puntuación del jugador, la puntuación de la computadora y el número de empates de manera estilizada utilizando styled-components.


## Cómo Ejecutar la Aplicación

1. Clona este repositorio a tu máquina local.
2. Abre la terminal y navega hasta el directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Ejecuta `npm start` para iniciar la aplicación en tu navegador.

¡Diviértete jugando y demuestra que eres el mejor en Piedra, Papel o Tijeras!

---

Creado por Emanuel David Ponce
