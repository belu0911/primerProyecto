//detector de eventos al botón “Menú” que alterna la clase “nav-links-responsive“
// del elemento con la clase “.nav-links” cuando se hace clic.

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})

let boton= document.getElementById ("miBoton");

//Añadimos un oyente de ventos que escuche el evento "click"
boton.addEventListener("click", function(){
    alert("Haz hecho click en el boton!");
});

//Validacion formulario
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateEmail(email) {
    const expresionReg =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return expresionReg.test(email)
  }
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }