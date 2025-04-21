document.addEventListener('DOMContentLoaded', () => {
    const carritoContenido = document.getElementById('carrito-contenido');
    const carritoVacio = document.getElementById('carrito-vacio');
    const totalValor = document.getElementById('total-valor');
    const botonVaciar = document.getElementById('vaciar-carrito');
    const botonComprar = document.getElementById('comprar');
    
    let carrito = JSON.parse(localStorage.getItem('carrito')) || []; // Cargar carrito desde localStorage

    // Actualizar el estado del carrito
    function actualizarCarrito() {
        if (carrito.length === 0) {
            carritoVacio.style.display = 'block'; // Mostrar mensaje si el carrito está vacío
            carritoContenido.style.display = 'none'; // Ocultar los productos
        } else {
            carritoVacio.style.display = 'none'; // Ocultar el mensaje de vacío
            carritoContenido.style.display = 'block'; // Mostrar los productos
            mostrarProductos(); // Llamar función para mostrar productos
        }
        actualizarTotal(); // Actualizar el total
    }

    // Mostrar los productos en el carrito
    function mostrarProductos() {
        carritoContenido.innerHTML = ''; // Limpiar el carrito visual antes de renderizar
        carrito.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('producto-carrito');
            div.innerHTML = `
                <p>${producto.nombre}</p>
                <p>Cantidad: ${producto.cantidad}</p>
                <p>Precio: $${producto.precio}</p>
                <p>Total: $${producto.precio * producto.cantidad}</p>
                <button class="eliminar" data-id="${producto.id}">Eliminar</button>
            `;
            carritoContenido.appendChild(div); // Agregar el producto al carrito visual
        });

        // Agregar eventos a los botones de eliminar
        const botonesEliminar = document.querySelectorAll('.eliminar');
        botonesEliminar.forEach(boton => {
            boton.addEventListener('click', eliminarProducto); // Eliminar producto del carrito
        });
    }

    // Eliminar un producto del carrito
    function eliminarProducto(e) {
        const idProducto = e.target.getAttribute('data-id');
        carrito = carrito.filter(producto => producto.id !== idProducto); // Filtrar el carrito
        localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar el carrito actualizado en localStorage
        actualizarCarrito(); // Actualizar el carrito visual
    }

    // Actualizar el total de la compra
    function actualizarTotal() {
        let total = 0;
        carrito.forEach(producto => {
            total += producto.precio * producto.cantidad; // Calcular el total
        });
        totalValor.textContent = total; // Mostrar total en la página
    }

    // Vaciar el carrito
    botonVaciar.addEventListener('click', () => {
        carrito = []; // Vaciar el carrito
        localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar carrito vacío
        actualizarCarrito(); // Actualizar la vista
    });

    // Comprar (por ahora solo muestra mensaje)
    botonComprar.addEventListener('click', () => {
        // Aquí podrías integrar un sistema de pago
        alert('¡Gracias por tu compra!'); // Mensaje de compra
        carrito = []; // Vaciar carrito después de la compra
        localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar carrito vacío
        actualizarCarrito(); // Actualizar la vista
    });

    // Inicializar carrito al cargar la página
    actualizarCarrito();
});
