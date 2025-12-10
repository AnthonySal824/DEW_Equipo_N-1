
// === CONFIGURACIÓN ===
const duration = 400; // duración en milisegundos de la transición

document.addEventListener("DOMContentLoaded", () => {

    // --- FADE IN AL CARGAR LA PÁGINA ---
    document.body.style.opacity = 0;
    document.body.style.transition = `opacity ${duration}ms ease`;
    requestAnimationFrame(() => {
        document.body.style.opacity = 1;
    });

    // --- FADE OUT ANTES DE SALIR ---
    const links = document.querySelectorAll("a:not([target='_blank'])");

    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const url = link.href;

            document.body.style.opacity = 0;

            setTimeout(() => {
                window.location.href = url;
            }, duration);
        });
    });

});

