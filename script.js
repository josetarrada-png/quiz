
const pregunta1 = {
  pregunta: "¿Qué lenguaje se usa para dar estilo a una página web?",
  opciones: [
	{id: 1, texto: "HTML"}, 
	{id: 2,	texto: "CSS"}, 
	{id: 3, texto: "JavaScript"}, 
	{id: 4,	texto: "Git"}
	],
  correcta: 2
};

const pregunta2 = {
  pregunta: "¿Qué método de un array crea uno nuevo transformando cada elemento?",
  opciones: [
	{id: 1, texto: "forEach"}, 
	{id: 2, texto: "map"}, 
	{id: 3, texto: "filter"}, 
	{id: 4, texto: "push"}
	],
  correcta: 2
};

const pregunta3 = {
  pregunta: "¿Qué palabra se usa para declarar una variable que no se puede reasignar?",
  opciones: [
	{id: 1, texto: "const"}, 
	{id: 2, texto: "var"}, 
	{id: 3, texto: "let"}, 
	{id: 4, texto: "static"}
],
  correcta: 1
};

const pregunta4 = {
  pregunta: "¿Qué método añade un elemento al final de un array?",
  opciones: [
	{id: 1, texto: "pop"}, 
	{id: 2, texto: "shift"}, 
	{id: 3, texto: "push"},
	{id: 4, texto: "slice"}
],
  correcta: 3
};

const pregunta5 = {
  pregunta: "¿Qué operador compara valor y tipo a la vez?",
  opciones: [
	{id: 1, texto: "="}, 
	{id: 2, texto: "=="}, 
	{id: 3, texto: "==="}, 
	{id: 4, texto: "!="}
],
  correcta: 3
};

const pregunta6 = {
  pregunta: "¿Qué método convierte un texto JSON en un objeto de JavaScript?",
  opciones: [
	{id: 1, texto: "JSON.stringify"}, 
	{id: 2, texto: "JSON.parse"}, 
	{id: 3, texto: "JSON.object"}, 
	{id: 4, texto: "JSON.convert"}
],
  correcta: 2
};

const preguntas = [pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6];

// apunta a un h2 donde se inserta el texto de las preguntas, para que aparezcan las preguntas 
const mensajePregunta = document.querySelector("#textoPregunta");

// apunta a un div donde aparecen las 4 opciones, para que se vean las opciones
const contenedorOpciones = document.querySelector("#opciones");

// conecta con el <p> donde se escribe "Correcto"/"Incorrecto" y, al final, "Aciertos: X de Y"
const mensajeAciertos = document.querySelector("#texto-aciertos");

// conecta con el botón de reiniciar, para mostrarlo, ocultarlo y escuchar su clic
const botonReiniciar = document.querySelector("#boton-reiniciar");

// variable donde se guarda el indice de la pregunta, cambia al pasar de pregunta
let indicePregunta = 0;

// variable donde se guardan los aciertos, cambia al acertar
let contadorAciertos = 0;


function mostrarPregunta() {
// pone el título de la pregunta que toca según el índice y limpia lo de la pregunta anterior
  mensajePregunta.textContent = preguntas[indicePregunta].pregunta;
  contenedorOpciones.textContent = "";
  mensajeAciertos.textContent = "";
  mensajeAciertos.classList.remove("verde");
  mensajeAciertos.classList.remove("rojo");
  botonReiniciar.style.display = "none";

// recorre las opciones de la pregunta actual y crea un botón por cada una
  preguntas[indicePregunta].opciones.forEach((opcionActual) => {
    const botonOpcion = document.createElement("button");

// guarda en el botón el id de su opción; luego, al responder, se compara con "correcta" para saber cuál es el botón correcto
    botonOpcion.dataset.id = opcionActual.id;

    botonOpcion.addEventListener("click", function () {
// si el id de la opción pulsada coincide con "correcta": muestra "Correcto", suma 1 y pone la franja verde; si no, muestra "Incorrecto" y la pone roja
      if (opcionActual.id === preguntas[indicePregunta].correcta) {
        mensajeAciertos.textContent = "Correcto";
        contadorAciertos = contadorAciertos + 1;
        mensajeAciertos.classList.add("verde");
      } else {
        mensajeAciertos.textContent = "Incorrecto";
        mensajeAciertos.classList.add("rojo");
      }
// bloquea los 4 botones para que no se pueda responder otra vez y marca con la clase "correcta" el botón bueno, para que el CSS lo deje destacado
      contenedorOpciones.querySelectorAll("button").forEach((boton) => {
        boton.disabled = true;

        if (Number(boton.dataset.id) === preguntas[indicePregunta].correcta) {
          boton.classList.add("correcta");
        }
      });
// espera 1,1 segundos tras responder, para ver el resultado, y entonces llama a la función avanzar
      setTimeout(() => {
        avanzar();
      }, 1100);
    });

    botonOpcion.textContent = opcionActual.texto;

    contenedorOpciones.appendChild(botonOpcion);
  });
}
mostrarPregunta(); 

function avanzar() {
// si todavía queda una pregunta después de la actual, suma 1 al índice y la muestra
	if (indicePregunta < preguntas.length - 1) {
		indicePregunta = indicePregunta + 1;
		mostrarPregunta();

// ya no quedan más preguntas: muestra la puntuación final, enseña el botón de reiniciar y quita el verde y el rojo		
	}else {
		mensajeAciertos.textContent = "Aciertos: " + contadorAciertos + " de " + preguntas.length
		botonReiniciar.textContent = "↺ Reiniciar";
		botonReiniciar.style.display = "block";
		mensajeAciertos.classList.remove("verde");
    	mensajeAciertos.classList.remove("rojo");
	}
}

// al pulsar reiniciar, pone el índice y los aciertos a 0 y vuelve a mostrar la primera pregunta
botonReiniciar.addEventListener("click",function () {

	indicePregunta = 0;
	contadorAciertos = 0;
	mostrarPregunta();	
});





