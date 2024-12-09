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
    event.preventDefault();  
    const nombre = document.getElementById('nombre').value;  
    alert('Formulario enviado. Nombre: ' + nombre); 
}