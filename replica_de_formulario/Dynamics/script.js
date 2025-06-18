document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const edad = document.getElementById("edad").value.trim();
  const cp = document.getElementById("cp").value.trim();

  const errorNombre = document.getElementById("error-nombre");
  const errorEdad = document.getElementById("error-edad");
  const errorCP = document.getElementById("error-cp");

  // Resetear errores
  errorNombre.textContent = "";
  errorEdad.textContent = "";
  errorCP.textContent = "";

  let valido = true;

  if (nombre === "") {
    errorNombre.textContent = "Falta por llenar";
    valido = false;
  }

  if (edad === "") {
    errorEdad.textContent = "Falta por llenar";
    valido = false;
  } else if (isNaN(edad)) {
    errorEdad.textContent = "Debe ser un número";
    valido = false;
  }

  if (cp === "") {
    errorCP.textContent = "Falta por llenar";
    valido = false;
  } else if (isNaN(cp) || cp.length !== 5) {
  errorCP.textContent = "Debe tener 5 números";
  }


  if (valido) {
    alert("Formulario enviado correctamente.");
  }
});
