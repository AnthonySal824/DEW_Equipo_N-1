
// Selecciona todos los botones de carrito
document.querySelectorAll(".producto-card .btn-carrito").forEach((btn, index) => {

    btn.addEventListener("click", () => {

        // Obtiene el contenedor del producto
        const card = btn.closest(".producto-card");

        // Extrae nombre del producto
        const nombre = card.querySelector("h3").textContent.trim();

        // Extrae precio
        const precio = card.querySelector(".precio").textContent.trim();

        // Número de WhatsApp
        const celular = "51950635988";

        // Mensaje
        const mensaje = `Hola, quisiera saber si hay stock del producto: ${nombre} (precio ${precio}).`;

        // Enlace de WhatsApp codificado
        const url = "https://api.whatsapp.com/send?phone=" + celular +
                    "&text=" + encodeURIComponent(mensaje);

        // Abrir WhatsApp
        window.open(url, "_blank");
    });

});

