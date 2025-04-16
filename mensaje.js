// Seleccionamos el botón por su ID
const boton = document.getElementById("botonSaludo");

// Seleccionamos el párrafo por su clase
const parrafo = document.querySelector(".respuesta");

// Cuando se hace clic en el botón, se cambia el contenido del párrafo
boton.addEventListener("click", function() {
    parrafo.textContent = "¡Bienvenido a tu cafeteria favorita! 😄";
});