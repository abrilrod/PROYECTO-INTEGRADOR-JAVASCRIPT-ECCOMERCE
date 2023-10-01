document.addEventListener("DOMContentLoaded", function() {
    // 1- obtengo la section de productos
    const productosSection = document.getElementById("productos-destacados-content");
    console.log(productosSection)

    // FETCH y JSON 
    function cargarProductosDestacados() {
        fetch("./products.json")
            .then(function(response){
                return response.json();
            })

            .then(function(productosData) {
                console.log(productosData.boxesPrincip);
                console.log(productosData.productosIndiv);

                let boxes = productosData.boxesPrincip;
                let html = "";
                let boxesArray = [];

                // selecciono boxes                         <p>${producto.description}</p>
                for (const key in boxes) {
                    if (boxes.hasOwnProperty(key)) {
                        const producto = boxes[key];
                        html += `
                        <div class="box">
                            <div class="box-content">
                                <div class="header-box">
                                    <img src="${producto.image}" alt="${producto.name}">
                                    <h3>${producto.name}</h3>
                                </div>

                                <div class="footer-box">
                                    <div class="price-punt">
                                        <span>$${producto.price}</span>
                                        <span><i class="fa-solid fa-star"></i> ${producto.puntuacion}</span>
                                    </div>
                                    <div class="btn">
                                        <button class="details-button" data-product-id="${producto.id}">Ver detalles</button>
                                        <button><span class="material-symbols-outlined">shopping_cart</span></button>
                                    </div>
                            
                                </div>
                            </div>
                        </div>`
                    
                        boxesArray.push(boxes[key]);
                    }
                }
            productosSection.innerHTML = html;


            // ver detalles de cada producto 

            // btn ver detalles
            const detailsBtn = document.querySelectorAll(".details-button");

            detailsBtn.forEach(function(button) {
                button.addEventListener("click", function(event) {
                    const productId = event.target.getAttribute('data-product-id');
                    window.location.href = `product.html?id=${productId}`;
                });
            })
            console.log(detailsBtn)

            // JSON en el localStorage 
            localStorage.setItem("productos-destacados", JSON.stringify(boxesArray));

            // comprobación
            console.log("Todo ejecutado con éxito")
            })
            .catch(function(error) {
                console.error(error);
            });
    }

    cargarProductosDestacados()
});