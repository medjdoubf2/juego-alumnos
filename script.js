let alumnos = [
    "Alejandro", 
    "Alberto", 
    "Anny", 
    "Danielo", 
    "Fernanda", 
    "Fouad", 
    "Juan Pablo", 
    "Sergio", 
    "Yolanda", 
    "Tea"
];

// Preguntas sobre los alumnos
let preguntas = [
    { afirmacion: "Fouad es el quinto alumno de la lista.", respuesta: "verdadero" },
    { afirmacion: "Alejandro es el primer alumno de la lista.", respuesta: "verdadero" },
    { afirmacion: "Fernanda es la última alumna de la lista.", respuesta: "falso" },
    { afirmacion: "Sergio es el séptimo alumno de la lista.", respuesta: "falso" },
    { afirmacion: "Anny es la tercera alumna de la lista.", respuesta: "verdadero" },
    { afirmacion: "Yolanda es la sexta alumna de la lista.", respuesta: "falso" },
    { afirmacion: "Albert es el octavo alumno de la lista.", respuesta: "falso" },
    { afirmacion: "Tea es la ultima alumna de la lista.", respuesta: "verdadero" }
    
];

let puntaje = 0;
let indicePregunta = 0;

function mostrarPregunta() {
    if (indicePregunta < preguntas.length) {
        document.getElementById('pregunta').innerText = preguntas[indicePregunta].afirmacion;
    } else {
        document.getElementById('pregunta').innerText = "Juego terminado. Tu puntaje final es: " + puntaje;
        document.getElementById('resultado').style.display = "none";
        document.querySelectorAll('button').forEach(button => button.style.display = "none");
    }
}

function respuesta(respuestaUsuario) {
    if (respuestaUsuario === preguntas[indicePregunta].respuesta) {
        puntaje++;
        document.getElementById('resultado').innerText = "¡Correcto!";
    } else {
        document.getElementById('resultado').innerText = "Incorrecto. La respuesta correcta era: " + preguntas[indicePregunta].respuesta;
    }
    indicePregunta++;
    document.getElementById('puntaje').innerText = "Puntaje: " + puntaje;
    mostrarPregunta();
}

// Iniciar el juego
mostrarPregunta();