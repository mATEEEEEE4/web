function registrarCorreo(event) {
  event.preventDefault(); // Evita que se recargue la página

  const correo = document.getElementById('correo').value;

  localStorage.setItem('correoRegistrado', correo);

  document.getElementById('mensaje-registro').textContent = "¡Registro exitoso!";
  document.getElementById('correo').value = "";
  
}
