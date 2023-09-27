// Archivo js/modo.js

// Obtiene el botón que cambia el modo
const toggle = document.querySelector(".toggle");

// Obtiene el elemento body
const body = document.body;

// Añade un evento al botón para cambiar el modo al hacer clic
toggle.addEventListener("click", () => {
    // Alterna la clase dark-mode en el body
    body.classList.toggle("dark-mode");
});
