document.addEventListener('DOMContentLoaded', function() {
    // 1. Obtener todos los elementos necesarios
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const slideText = document.querySelector('.slide-text');
    let currentSlide = 0; // Índice del slide actual

    // 2. Función para mostrar un slide específico
    function showSlide(index) {
        // Lógica de bucle y actualización de índice
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        // Remover 'active' de todos y añadirlo al actual
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Solo si el slide existe
        if (slides[currentSlide]) {
             slides[currentSlide].classList.add('active');
             dots[currentSlide].classList.add('active');
        }

        // Actualizar el texto dinámico
        const textContent = slides[currentSlide].getAttribute('data-text');
        if (slideText) {
             slideText.textContent = textContent;
        }
    }

    // 3. Configurar eventos de click (para la navegación manual)
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetAutoSlide(); 
        });
    });

    // 4. Implementación del Autoplay (Cambio Automático)
    let slideInterval;
    const intervalTime = 5000; // 5 segundos

    function startAutoSlide() {
        // Esta línea es la que ejecuta el cambio cada 5 segundos
        slideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, intervalTime);
    }

    function resetAutoSlide() {
        clearInterval(slideInterval);
        startAutoSlide();
    }

    // 5. Inicializar y empezar el Autoplay
    if (slides.length > 0) {
        showSlide(currentSlide); 
        startAutoSlide(); 
    }
});


const toggleBtn = document.querySelector(".redes-toggle");
const redes = document.querySelector(".redes-sociales");

toggleBtn.addEventListener("click", () => {
  redes.classList.toggle("show");
});
