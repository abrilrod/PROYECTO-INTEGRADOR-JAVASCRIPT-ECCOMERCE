document.addEventListener("DOMContentLoaded", function() {

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    const productosDestacados = JSON.parse(localStorage.getItem("productos-destacados"));
    console.log(productosDestacados);

    console.log("Tipo de productosDestacados:", typeof productosDestacados);


    for (let productoKey in productosDestacados) {
        if (productosDestacados.hasOwnProperty(productoKey)) {
          const box = productosDestacados[productoKey];
          
          if (box.hasOwnProperty('id') && box.id == productId) {
            console.log(`Producto con id ${productId} encontrado en ${productoKey}:`, box);
            
            const productDetails = document.getElementById("product-details");
            console.log(productDetails);

            productDetails.innerHTML += `
                <img src="${box.image}"
                <h2>${box.name}</h2>
                <p>${box.description}</p>
                <span>Precio: $${box.price}</span>
                <span>Puntuación:<i class="fa-solid fa-star"></i> ${box.puntuacion}</span>
                <button>Agregar al carrito <span class="material-symbols-outlined">shopping_cart</span></button>
                <button><a href="./index.html#home">Volver</a></button>`;

            } else {
            console.error("Producto no encontrado");
            }
        }

    }
    // const box = productosDestacados.find(box => box.id == productId);
            
    // 2° comprobación 
    console.log("Ejecución completada");

});