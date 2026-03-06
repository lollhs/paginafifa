
/* tab sede Muestra el panel del país  seleccionado*/
function showTab(country, btn) {
  // Ocultar todos los paneles
  document.querySelectorAll('.sedes-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  // Quitar clase activa de todos los botones
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.remove('active');
  });

  // Mostrar el panel seleccionado
  document.getElementById(country).classList.add('active');

  // Activar btn
  btn.classList.add('active');
}

// CUENTA REGRESIVA
function updateCountdown() {
  const target = new Date('2026-06-11T18:00:00Z');
  const now    = new Date();
  const diff   = target - now;

  // Si el mundial ya empezó
  if (diff <= 0) {
    document.getElementById('days').textContent    = '¡YA!';
    document.getElementById('hours').textContent   = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    return;
  }

  const days    = Math.floor(diff / 86400000);
  const hours   = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  document.getElementById('days').textContent    = String(days).padStart(3, '0');
  document.getElementById('hours').textContent   = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Ejecutar al cargar y cada segundo
updateCountdown();
setInterval(updateCountdown, 1000);

/* animacion */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

// Aplicar efecto a las tarjetas principales
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll(
    '.info-card, .grupo-card, .fav-card, .phase-card, .sede-card'
  );

  cards.forEach((card, i) => {
    card.style.opacity    = '0';
    card.style.transform  = 'translateY(20px)';
    card.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
    observer.observe(card);
  });
});


/* LOGIN */
document.addEventListener("DOMContentLoaded", () => {

  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");
  const loginSection = document.querySelector(".login-section");

  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    if (usuario === "loe" && password === "1234") {

      loginMessage.style.color = "var(--gold)";
      loginMessage.textContent = "Bienvenido ⚽";

      setTimeout(() => {
        loginSection.style.display = "none";
      }, 800);

    } else {
      loginMessage.style.color = "red";
      loginMessage.textContent = "Usuario o contraseña incorrectos";
    }
  });

});