// Acá se elige un número al azar

let numeroAzar = Math.floor(Math.random() * 100) + 1;
alert(numeroAzar);
let numeroEntrada = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje");

//Esta acción se va a ejecuatr cuando se toque el botón chequear

function chequearResultado() {
  let numeroIngresado = parseInt(numeroEntrada.value);

  if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
    mensaje.textContent = "Por favor, introduce un número válido entre 1 y 100";
  }
  if (numeroIngresado === numeroAzar) {
    mensaje.textContent = "!Felicitaciones! Has adivinado el número";
    mensaje.style.color = "green";
    numeroEntrada.disabled = true;
  } else if (numeroIngresado < numeroAzar) {
    mensaje.textContent = "Más alto, el número es mayor al que dijiste";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "Más abajo, el número es menor al que dijiste";
    mensaje.style.color = "red";
  }
}
