document.addEventListener('DOMContentLoaded', () => {
    const badge = document.getElementById('badge');
    const cantidad = parseInt(localStorage.getItem('carritoCantidad')) || 0;

    if (badge) {
        badge.innerText = cantidad;
        badge.style.display = 'flex'; // mostrar siempre el badge, incluso si es 0
    }
});
