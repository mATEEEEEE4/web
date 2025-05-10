let carrito = [];

function agregarAlCarrito(nombre, precio) {
    const producto = { nombre, precio };
   
    carrito.push(producto);
   
    actualizarContador();
}

function actualizarContador() {
    document.getElementById('contador-carrito').textContent = carrito.length;
}

function verCarrito() {
    document.getElementById('carrito-modal').style.display = 'flex';
   
    const listaCarrito = document.getElementById('carrito-lista');
    listaCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach(producto => {
        const item = document.createElement('li');
        item.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(item);
        total += producto.precio;
    });

    document.getElementById('total-carrito').textContent = total;
}

function cerrarCarrito() {
    document.getElementById('carrito-modal').style.display = 'none';
}
