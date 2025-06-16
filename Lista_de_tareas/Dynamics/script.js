let contadorImagenes = 0;

function agregarTareaTexto() {
  const div = document.createElement("div");
  div.className = "tarjeta";

  const texto = document.createElement("p");
  texto.textContent = "Esta es una tarea de texto.";

  div.appendChild(texto);
  document.getElementById("contenedor").appendChild(div);
}

function agregarTareaImagen() {
  if (contadorImagenes >= 2) return;

  const div = document.createElement("div");
  div.className = "tarjeta";

  const texto = document.createElement("p");
  texto.textContent = `Imagen número ${contadorImagenes + 1}`;

  const img = document.createElement("img");

  if (contadorImagenes === 0) {
    img.src = "Statics/Styles/img/meme1.jpg";
  } else if (contadorImagenes === 1) {
    img.src = "Statics/Styles/img/meme2.jpg";
  }

  div.appendChild(texto);
  div.appendChild(img);
  document.getElementById("contenedor").appendChild(div);

  contadorImagenes++;
}

function eliminarTarea() {
  const contenedor = document.getElementById("contenedor");
  if (contenedor.lastChild) {
    contenedor.removeChild(contenedor.lastChild);

    // Si era una imagen, reducir contador
    if (contadorImagenes > 0) {
      contadorImagenes--;
    }
  }
}
