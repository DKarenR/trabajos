/* En este archivo se encargarán de generar el código que hará dinámica la página */
// Seleccionamos todos los cuadros generados
const cuadros = document.getElementsByClassName("cuadrado");

// Botón de pares
document.getElementById("pares").addEventListener("click", () => {
  for (let cuadro of cuadros) {
    const numero = parseInt(cuadro.innerText);
    if (numero % 2 === 0) {
      cuadro.classList.toggle("azul");
    }
  }
});

// Botón de impares
document.getElementById("impares").addEventListener("click", () => {
  for (let cuadro of cuadros) {
    const numero = parseInt(cuadro.innerText);
    if (numero % 2 !== 0) {
      cuadro.classList.toggle("rojo");
    }
  }
});

// Botón de primos
document.getElementById("primos").addEventListener("click", () => {
  const primos = obtenerPrimosHasta(100);
  for (let cuadro of cuadros) {
    const numero = parseInt(cuadro.innerText);
    if (primos.includes(numero)) {
      cuadro.classList.toggle("verde");
    }
  }
});

// Criba de Eratóstenes para generar primos hasta un límite
function obtenerPrimosHasta(max) {
  const esPrimo = Array(max + 1).fill(true);
  esPrimo[0] = esPrimo[1] = false;

  for (let i = 2; i * i <= max; i++) {
    if (esPrimo[i]) {
      for (let j = i * i; j <= max; j += i) {
        esPrimo[j] = false;
      }
    }
  }

  const primos = [];
  for (let i = 2; i <= max; i++) {
    if (esPrimo[i]) primos.push(i);
  }
  return primos;
}


