document.addEventListener('DOMContentLoaded', () => {
    const badge = document.getElementById('badge');
    const cantidad = parseInt(localStorage.getItem('carritoCantidad')) || 0;

    if (badge) {
        badge.innerText = cantidad;
        badge.style.display = 'flex'; // mostrar siempre el badge, incluso si es 0
    }
});

// MANTENER CARRITO

document.addEventListener('DOMContentLoaded', () => {
    const badge = document.getElementById('badge');
    const button = document.querySelector('.carrito-boton'); // tu botón de agregar al carrito

    // Obtener cantidad guardada en localStorage o empezar con 0
    let cantidadProductos = parseInt(localStorage.getItem('carritoCantidad')) || 0;

    // Mostrar el número al cargar la página
    if (badge) {
        badge.innerText = cantidadProductos;
        badge.style.display = cantidadProductos > 0 ? 'flex' : 'none';
    }

    // Si existe botón para agregar al carrito
    if (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault(); // para que no recargue la página si es <a> o <button>

            if (button.innerText === 'AGREGAR AL CARRITO') {
                cantidadProductos++;
                button.innerText = 'QUITAR DEL CARRITO';
            } else {
                cantidadProductos = Math.max(0, cantidadProductos - 1);
                button.innerText = 'AGREGAR AL CARRITO';
            }

            // Guardar la cantidad en el localStorage
            localStorage.setItem('carritoCantidad', cantidadProductos);

            // Mostrar en el badge
            if (badge) {
                badge.innerText = cantidadProductos;
                badge.style.display = cantidadProductos > 0 ? 'flex' : 'none';
            }
        });
    }
});
