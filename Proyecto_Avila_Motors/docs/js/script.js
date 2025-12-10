
// Animación de botón al hacer clic
document.getElementById('loginBtn').addEventListener('click', function () {
  alert('Intentando iniciar sesión...');
});

// Animación sutil al mover el mouse sobre la caja de login
const loginBox = document.querySelector('.login-box');

loginBox.addEventListener('mousemove', (e) => {
  const x = (e.offsetX / loginBox.offsetWidth - 0.5) * 10;
  const y = (e.offsetY / loginBox.offsetHeight - 0.5) * 10;
  loginBox.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});

loginBox.addEventListener('mouseleave', () => {
  loginBox.style.transform = 'rotateX(0) rotateY(0)';
});
