
let contador = localStorage.getItem("carrito") || 0;

const contadorCarrito = document.querySelector("#contadorCarrito");
const totalCarrito = document.querySelector("#totalCarrito");
const botonesAgregar = document.querySelectorAll(".agregar-carrito");

function actualizarContador() {
    if (contadorCarrito) {
        contadorCarrito.textContent = contador;
    }

    if (totalCarrito) {
        totalCarrito.textContent = contador;
    }
}

botonesAgregar.forEach(function (boton) {
    boton.addEventListener("click", function () {
        contador++;
        localStorage.setItem("carrito", contador);
        actualizarContador();
    });
});

actualizarContador();