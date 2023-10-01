document.addEventListener("DOMContentLoaded", function() {
function mostrarDetallesProducto() {
    const productDetails = document.getElementById("product-details");
    console.log(productDetails)

    const productId = new URLSearchParams(window.location.search).get("id");
    const productosDestacados = JSON.parse(localStorage.getItem("productos-destacados"));

    console.log("Tipo de productosDestacados:", typeof productosDestacados);

    let es = Array.isArray(productosDestacados)
    console.log(es)

    if (productId && productosDestacados) {
        let producto = null;

        for (let i = 0; i < productosDestacados.lenght; i++) {
            if (productosDestacados[i].id === productId) {
                producto = productosDestacados[i];
                break;
            }
            
        }

        console.log("Producto encontrado:", producto);


        if (producto) {
            let productHtml = "";

            productHtml += `
                <img src="${producto.image}"
                <h2>${producto.name}</h2>
                <p>${producto.description}</p>
                <span>Precio: $${producto.price}</span>
                <span>Puntuación: ${producto.puntuacion}</span>`;

            productDetails.innerHTML = productHtml;
        } else {
            console.error("Producto no encontrado");
        }
    } else {
        console.error("ID de producto o productos destacados no disponibles");
    }
}

const isProductPage = window.location.pathname.includes("product.html");

if (isProductPage) {
    mostrarDetallesProducto();
}

// 2° comprobación 
console.log("Ejecución completada");

});