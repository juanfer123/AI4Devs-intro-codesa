// Seleccionamos los elementos del DOM
const form = document.getElementById('reverseForm');
const input = document.getElementById('inputString');
const result = document.getElementById('result');

// Añadimos un evento al formulario para procesar la entrada
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar que la página se recargue
    const inputValue = input.value; // Obtenemos el valor del campo de texto
    const reversedString = reverseString(inputValue); // Lógica para invertir la cadena
    result.textContent = reversedString; // Mostramos el resultado en el elemento <p>
});

// Función para invertir una cadena de texto
function reverseString(str) {
    return str.split('').reverse().join('');
}
