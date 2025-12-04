let index = 0;

function cambiarSlide() {
    const slides = document.querySelectorAll(".slide");
    const puntos = document.querySelectorAll(".punto");

    // Quitar activos
    slides.forEach(s => s.classList.remove("active"));
    puntos.forEach(p => p.classList.remove("activo"));

    // Avanzar
    index++;
    if (index >= slides.length) index = 0;

    // Activar slide y punto actual
    slides[index].classList.add("active");
    puntos[index].classList.add("activo");
}

// Cambia cada 3 segundos
setInterval(cambiarSlide, 3000);
