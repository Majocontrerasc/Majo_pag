document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "admin" && password === "admin123") {
      document.getElementById("message").innerText = "Inicio de sesión exitoso";
      document.getElementById("message").style.color = "green";
    } else {
      document.getElementById("message").innerText = "Credenciales inválidas";
      document.getElementById("message").style.color = "red";
    }
  });