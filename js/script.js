const productos = [
    { nombre: "Galletas", precio: 150 },
    { nombre: "Gaseosa", precio: 250 },
    { nombre: "Caramelos", precio: 100 }
  ];
  
  function mostrarProductos() {
    console.log("Lista de productos disponibles en el kiosco:");
    productos.forEach((producto, index) => {
      console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
    });
  }
  
  function elegirProducto() {
    let eleccion = parseInt(prompt("Elige un producto del kiosco:\n1. Galletas\n2. Gaseosa\n3. Caramelos"));
    if (eleccion >= 1 && eleccion <= 3) {
      return productos[eleccion - 1];
    } else {
      alert("Opción no válida.");
      return null;
    }
  }
  
  function calcularTotal(producto, cantidad) {
    return producto.precio * cantidad;
  }
  
  function iniciarKiosco() {
    alert("¡Bienvenido al Kiosco!");
    mostrarProductos();
  
    let producto = elegirProducto();
    if (producto) {
      let cantidad = parseInt(prompt(`¿Cuántos ${producto.nombre} deseas comprar?`));
      if (!isNaN(cantidad) && cantidad > 0) {
        let total = calcularTotal(producto, cantidad);
        alert(`Compraste ${cantidad} ${producto.nombre}(s).\nTotal a pagar: $${total}`);
        console.log(`Compra confirmada: ${cantidad} x ${producto.nombre} = $${total}`);
      } else {
        alert("Cantidad inválida.");
      }
    }
  }
  
  iniciarKiosco();
  