// Función que se ejecuta cuando el usuario pulsa "Enviar" en el formulario
function sendForm() {

  //  Coge el valor del input con id="nombre", le quita espacios al inicio/fin y lo guarda en la variable nombre
  const nombre = document.getElementById('nombre').value.trim();

  //  Coge el valor del input con id="email", le quita espacios al inicio/fin y lo guarda en la variable email
  const email = document.getElementById('email').value.trim();

  // 3) Si falta el nombre O falta el email , se muestra un aviso y se para la función
  if (!nombre || !email) {
    alert('Por favor, completa el nombre y el email.'); // Mensaje emergente
    return; // Sale de la función para no seguir
  }

  //  Busca el elemento con id="toast"
  const toast = document.getElementById('toast');

  //  Le añade la clase show para que el toast se vea 
  toast.classList.add('show');

  //  Después de 3.5 segundos (3500 ms), le quita la clase "show" para ocultarlo
  setTimeout(() => toast.classList.remove('show'), 3500);

  //  Limpia  todos los campos del formulario para dejarlo como nuevo
  document.getElementById('nombre').value = '';   // borra el nombre
  document.getElementById('empresa').value = '';  // borra la empresa
  document.getElementById('email').value = '';    // borra el email
  document.getElementById('servicio').value = ''; // borra el servicio 
  document.getElementById('mensaje').value = '';  // borra el mensaje 
}