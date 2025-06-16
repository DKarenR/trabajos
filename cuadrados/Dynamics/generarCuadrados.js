const cuadrados = document.getElementById("cuadrados");

let n = 0;
let html = '';
for(let i=1; i<=10; i++){
    html += `<div class="fila">`;
    for(let j=1; j<=10; j++){
        html += `<div class="cuadrado" id="${j+n}">${j+n}</div>`
    }
    html += `</div>`;
    n = i*10;
}

cuadrados.innerHTML = html;


