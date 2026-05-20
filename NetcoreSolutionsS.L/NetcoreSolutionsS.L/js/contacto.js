// Función que se ejecuta cuando el usuario pulsa "Enviar" en el formulario
function sendForm() {

  //  Coge el valor del input con id="nombre", le quita espacios al inicio/fin y lo guarda en la variable nombre
  const nombre = document.getElementById('nombre').value.trim();

  const empresa = document.getElementById('empresa').value.trim();

  //  Coge el valor del input con id="email", le quita espacios al inicio/fin y lo guarda en la variable email
  const email = document.getElementById('email').value.trim();

  const servicio= document.getElementById('servicio').value.trim();
  
  const mensaje = document.getElementById('mensaje').value.trim();

  // Si falta el nombre O falta el email , se muestra un aviso y se para la función
  if (!nombre || !email) {
    Swal.fire({
      icon: 'error', //icono
      title: '¡Faltan datos!', //titulo
      text: 'Por favor, completa el nombre y el email.' //mensaje
    });
    return; // Sale de la función para no seguir
  }

    //lo que hace esta funcio es mandar la informacion al correo de la empresa
  const asunto = 'Contacto NetCore Solutions S.L.' +" "+ nombre ;
  const cuerpo = 'Nombre: ' + nombre + '\nEmpresa: ' + empresa + '\nEmail: ' + email + '\nServicio: ' + servicio + '\n\nMensaje:\n' + mensaje;
 
  window.location.href = 'mailto:7195758@alu.murciaeduca.es?subject=' + encodeURIComponent(asunto) + '& body=' + encodeURIComponent(cuerpo);

  //  mensaje que sale al enviar el gmail.
  Swal.fire({
    title: '¡Mensaje enviado!',
    text: 'Abre tu cliente de correo para enviarlo.',
    icon: 'success'
  });


  //  Limpia  todos los campos del formulario para dejarlo como nuevo
  document.getElementById('nombre').value = '';   // borra el nombre
  document.getElementById('empresa').value = '';  // borra la empresa
  document.getElementById('email').value = '';    // borra el email
  document.getElementById('servicio').value = ''; // borra el servicio 
  document.getElementById('mensaje').value = '';  // borra el mensaje 
}
