function ProcesarFormulario() {
  const nombre = document.getElementById("nombre").value;
  const apellidos = document.getElementById("apellidos").value;
  const correo = document.getElementById("correo").value;
  const asunto = document.getElementById("asunto").value;
  const mensaje = document.getElementById("message").value;
  const telefono = document.getElementById("input-phone").value;

  document.getElementById("resultadoNombre").textContent = `Nombre: ${nombre}`;
  document.getElementById("resultadoApellidos").textContent = `Apellidos: ${apellidos}`;
  document.getElementById("resultadoCorreo").textContent = `Correo: ${correo}`;
  document.getElementById("resultadoAsunto").textContent = `Asunto: ${asunto}`;
  document.getElementById("resultadoMensaje").textContent = `Mensaje: ${mensaje}`;
  document.getElementById("resultadoTelefono").textContent = `Teléfono: ${telefono}`;
}


document.addEventListener("DOMContentLoaded", () => {
  const savedData = JSON.parse(sessionStorage.getItem("formData"));
  if (savedData) {
      document.getElementById("nombre").value = savedData.nombre || "";
      document.getElementById("apellidos").value = savedData.apellidos || "";
      document.getElementById("correo").value = savedData.correo || "";
      document.getElementById("asunto").value = savedData.asunto || "";
      document.getElementById("input-phone").value = savedData.telefono || "";
  }
});

document.getElementById("userform").addEventListener("input", () => {
  const formData = {
      nombre: document.getElementById("nombre").value,
      apellidos: document.getElementById("apellidos").value,
      correo: document.getElementById("correo").value,
      asunto: document.getElementById("asunto").value,
      telefono: document.getElementById("input-phone").value,
  };
  sessionStorage.setItem("formData", JSON.stringify(formData));
});

















/* document.addEventListener('DOMContentLoaded', () => {
  function procesarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const email = document.getElementById('correo').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('message').value;
    const telefono = document.getElementById('input-phone').value;

    document.getElementById('resultadoNombre').textContent = 'Su nombre es: $ (nombre)';
    document.getElementById('resultadoApellidos').textContent = 'Sus apellidos son: $ (apellidos)';
    document.getElementById('resultadoCorreo').textContent = 'Su correo es: $ (correo)';
    document.getElementById('resultadoAsunto').textContent = 'Asunto: $ (asunto)';
    document.getElementById('resultadoMensaje').textContent = 'Mensaje: $ (message)';
    document.getElementById('resultadoTelefono').textContent = 'Telefono: $ (input-phone)';
  }

  document.querySelector('button').addEventListener('click', procesarFormulario);
   function procesarFormulario(evento) {
    evento.preventDefault();
    let data = new FormData(formulario);
    fetch(formulario.action, {
      method: formulario.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          alert('Mensaje enviado');
          formulario.reset();
        } else {
          alert('Error al enviar el mensaje');
        }
      });  
  }) */