document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.carrito');

    if (!button) return; 

    button.addEventListener('click', function(e) {
        e.preventDefault(); 

        const id = button.getAttribute('data-id');

        if (button.classList.contains('en-carrito')) {
            button.classList.remove('en-carrito');
            button.innerText = 'AGREGAR AL CARRITO';
        } else {
            button.classList.add('en-carrito');
            button.innerText = 'QUITAR DEL CARRITO';
        }

        console.log(`Producto con ID ${id} actualizado.`);
    });
});


// CARRITO NAVBAR

const button = document.querySelector('button');
const badge = document.getElementById('badge');

let cantidadProductos = 0;

// Al hacer click en el botón
button.addEventListener('click', function () {
    if (button.innerText === 'AGREGAR AL CARRITO') {
        cantidadProductos++;
        button.innerText = 'QUITAR DEL CARRITO';
    } else {
        cantidadProductos = Math.max(0, cantidadProductos - 1); 
        button.innerText = 'AGREGAR AL CARRITO';
    }

    badge.innerText = cantidadProductos;
    badge.style.display = 'flex';
});

// BOTÓN

document.addEventListener('DOMContentLoaded', () => {
    const inputCantidad = document.getElementById('cantidad');
    const btnSumar = document.getElementById('sumar');
    const btnRestar = document.getElementById('restar');

    btnSumar.addEventListener('click', () => {
        inputCantidad.value = parseInt(inputCantidad.value) + 1;
    });

    btnRestar.addEventListener('click', () => {
        if (parseInt(inputCantidad.value) > 1) {
            inputCantidad.value = parseInt(inputCantidad.value) - 1;
        }
    });
});

