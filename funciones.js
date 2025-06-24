// Validación del formulario
const inputs = document.querySelectorAll(".form-input");
const formularioContacto = document.getElementById('formulario-contacto');

if (formularioContacto) {
  formularioContacto.addEventListener('submit', function (event) {
    event.preventDefault();
    let formularioValido = true;

    inputs.forEach(input => {
      const valor = input.value.trim();
      const tipo = input.type;

      input.classList.remove('is-invalid');

      if (valor === '') {
        input.classList.add('is-invalid');
        formularioValido = false;
      }

      if (tipo === 'email') {
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
        if (!emailValido) {
          input.classList.add('is-invalid');
          formularioValido = false;
        }
      }
    });

    if (formularioValido) {
      alert('Formulario enviado correctamente. ¡Gracias por tu mensaje!');
      inputs.forEach(input => {
        input.value = '';
        input.classList.remove('is-invalid');
      });
    } else {
      alert('Por favor, completá todos los campos correctamente.');
    }
  });
}


// Cambio de tema claro/oscuro
document.addEventListener('DOMContentLoaded', function () {
  const boton = document.getElementById('toggle-tema');
  const body = document.body;

  if (!boton) return;

  if (localStorage.getItem('modo') === 'oscuro') {
    body.classList.add('dark-mode');
    boton.textContent = '☀️ Modo claro';
  }

  boton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const modoOscuro = body.classList.contains('dark-mode');
    boton.textContent = modoOscuro ? '☀️ Modo claro' : '🌙 Modo oscuro';
    localStorage.setItem('modo', modoOscuro ? 'oscuro' : 'claro');
  });
});
