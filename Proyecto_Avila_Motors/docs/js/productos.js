
document.querySelectorAll('.favorito').forEach(icono => {
  icono.addEventListener('click', () => {
    icono.classList.toggle('fa-regular');
    icono.classList.toggle('fa-solid');
    icono.classList.toggle('activo');
  });
});



const paginas = ['productos1.html', 'productos2.html'];
const pagina = window.location.pathname.split("/").pop();

document.querySelector('.btn-siguiente').onclick = () => 
    window.location.href = paginas[(paginas.indexOf(pagina) + 1) % paginas.length];

document.querySelector('.btn-anterior').onclick = () => 
    window.location.href = paginas[(paginas.indexOf(pagina) - 1 + paginas.length) % paginas.length];
