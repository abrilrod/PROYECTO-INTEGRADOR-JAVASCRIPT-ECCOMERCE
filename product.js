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
                <img src="${box.image}">
                <div class="detail-content">
                    <div class="detail-text">
                        <h2>${box.name}</h2>
                        <span><i class="fa-solid fa-star"></i> ${box.puntuacion.toFixed(2)}</span>
                        <p>${box.description}</p>
                        <p>Incluye: ${box.includes}</p>
                        <span>$${box.price}</span>
                    </div>
                    <div class="btns">
                        <button>Agregar al carrito</button>
                        <button><a href="./index.html#home">Volver</a></button>
                    </div>
                </div>
                `;

            } else if (box.hasOwnProperty('id') && box.id != productId){
                console.log("El producto no corresponde al ID a buscar");
            } else {
                console.error("Producto no encontrado");
            }
        }

    }
            
    // 2° comprobación 
    console.log("Ejecución completada");

});