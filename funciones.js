const inputs = document.querySelectorAll(".form-input");
const formularioContacto = document.getElementById('formulario-contacto')

formularioContacto.addEventListener('submit', function (event) {
    event.preventDefault();
    let formularioValido = true;
    
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.value.trim() === ''){
                input.classList.add('is-invalid');
                formularioValido = false;
            } else {
                input.classList.remove('is-invalid')
            }
        })
    
        if (input.type === 'email') {
            const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
            if (!emailValido) {
                input.classList.add('is-invalid')
                formularioValido = false;
            }
        }
    })
    
    if (formularioContacto) {
        alert('Formulario enviado correctamente. ¡Gracias por tu mensaje!');

        inputs.forEach(input => {
            input.value = '';
            inputs.classList.remove('is-invalid')
        })
    } else {
        alert('Por favor complete los campos correctamente.')
    }
})