document.addEventListener('DOMContentLoaded', function () {
    const carouselSlide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    let index = 0;
    const interval = 3000;

    function showNextImage() {
        index = (index + 1) % images.length;
        const offset = -index * 100;
        carouselSlide.style.transform = `translateX(${offset}%)`;
    }

    setInterval(showNextImage, interval);
});

function enviarFormulario(event) {
    event.preventDefault();  // Evita que se recargue la página al enviar el formulario
    const nombre = document.getElementById('nombre').value;  // Obtiene el valor del campo 'nombre'
    alert('Formulario enviado. Nombre: ' + nombre);  // Muestra un mensaje con el nombre ingresado
}