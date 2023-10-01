document.addEventListener("DOMContentLoaded", function() {

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    const productosDestacados = JSON.parse(localStorage.getItem("productos-destacados"));
    console.log(productosDestacados);

    console.log("Tipo de productosDestacados:", typeof productosDestacados);

    const box = productosDestacados.find(box => box.id == productId);

    let es = Array.isArray(productosDestacados)
    console.log(es)

        if (box) {
            console.log("Producto encontrado:", box);

            const productDetails = document.getElementById("product-details");
            console.log(productDetails);

            let productHtml = "";

            productHtml += `
                <img src="${box.image}"
                <h2>${box.name}</h2>
                <p>${box.description}</p>
                <span>Precio: $${box.price}</span>
                <span>Puntuación: ${box.puntuacion}</span>
                <button>Agregar al carrito</button>`;

            productDetails.innerHTML = productHtml;
        } else {
            console.error("Producto no encontrado");
        }
    

// 2° comprobación 
console.log("Ejecución completada");

});