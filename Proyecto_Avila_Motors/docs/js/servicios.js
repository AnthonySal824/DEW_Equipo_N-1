// Lista de páginas de servicios
const paginas = [
  "servicios1.html",
  "servicios2.html",
  "servicios3.html",
  "servicios4.html"
];

// Detecta el nombre del archivo actual
const actual = window.location.pathname.split("/").pop();
let index = paginas.indexOf(actual);

// Botones
const btnSiguiente = document.getElementById("btnSiguiente");
const btnAnterior = document.getElementById("btnAnterior");

// Ir al siguiente
btnSiguiente.onclick = () => {
  let next = (index + 1) % paginas.length;  // circular
  window.location.href = paginas[next];
};

// Ir al anterior
btnAnterior.onclick = () => {
  let prev = (index - 1 + paginas.length) % paginas.length; // circular
  window.location.href = paginas[prev];
};
