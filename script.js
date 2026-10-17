
const pregunta1 = {
  pregunta: "¿Qué lenguaje se usa para dar estilo a una página web?",
  opciones: ["HTML", "CSS", "JavaScript", "Git"],
  correcta: "CSS"
};

const pregunta2 = {
  pregunta: "¿Qué método de un array crea uno nuevo transformando cada elemento?",
  opciones: ["forEach", "map", "filter", "push"],
  correcta: "map"
};

const pregunta3 = {
  pregunta: "¿Qué palabra se usa para declarar una variable que no se puede reasignar?",
  opciones: ["let", "var", "const", "static"],
  correcta: "const"
};

const pregunta4 = {
  pregunta: "¿Qué método añade un elemento al final de un array?",
  opciones: ["pop", "shift", "push", "slice"],
  correcta: "push",
};

const pregunta5 = {
  pregunta: "¿Qué operador compara valor y tipo a la vez?",
  opciones: ["=", "==", "===", "!="],
  correcta: "===",
};

const pregunta6 = {
  pregunta: "¿Qué método convierte un texto JSON en un objeto de JavaScript?",
  opciones: ["JSON.stringify", "JSON.parse", "JSON.object", "JSON.convert"],
  correcta: "JSON.parse",
};



const preguntas = [pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6];

const mensajePregunta = document.querySelector("#textoPregunta");

const contenedorOpciones = document.querySelector("#opciones");

const mensajeAciertos = document.querySelector("#texto-aciertos");

const botonSiguiente = document.querySelector("#boton-siguiente");


let indicePregunta = 0;
let contadorAciertos = 0;

function mostrarPregunta() {

	mensajePregunta.textContent = preguntas[indicePregunta].pregunta;
	contenedorOpciones.textContent = "";
	mensajeAciertos.textContent = "";
	botonSiguiente.style.display = "none";

	preguntas[indicePregunta].opciones.forEach((opcion) => {
    const botonOpcion = document.createElement("button");

    botonOpcion.addEventListener("click", function () {

      if (opcion === preguntas[indicePregunta].correcta) {
        mensajeAciertos.textContent = "✔ Correcto";
		contadorAciertos = contadorAciertos + 1	

      } else {
        mensajeAciertos.textContent = "✖ Incorrecto";	
      }

	  contenedorOpciones.querySelectorAll("button").forEach((boton) => {
		boton.disabled = true

		if (boton.textContent === preguntas[indicePregunta].correcta) {
			boton.classList.add("correcta")
    }		
	  })
	  setTimeout(() => {
      botonSiguiente.click();
    }, 1100);
	 
    });				 

    botonOpcion.textContent = opcion;

    contenedorOpciones.appendChild(botonOpcion);	
	
  });
	
}
mostrarPregunta(); 


botonSiguiente.addEventListener("click",function () {

	if (botonSiguiente.textContent === "↺ Reiniciar")	{	
		indicePregunta = 0;
		contadorAciertos = 0;
		mostrarPregunta();		
		botonSiguiente.textContent = "Siguiente";
	}

	else if (indicePregunta < preguntas.length - 1) {
		indicePregunta = indicePregunta + 1;
		mostrarPregunta();
	}else {
		mensajeAciertos.textContent = "Aciertos: " + contadorAciertos + " de " + preguntas.length
		botonSiguiente.textContent = "↺ Reiniciar";
		botonSiguiente.style.display = "block";
	}
	
});





