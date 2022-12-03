
///crea tarjeta de cada item///
productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className= "card"
    content.innerHTML = `

    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p>$ ${product.precio}</p>
    `;
    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    content.append(comprar);




    ///seleccion para compra de los items y suma de los elementos que se repiten///
    comprar.addEventListener("click", () => {
        //buscar en el carrito los elementos que se repiten
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        //recorrer el carrito para sumarlos todos en una sola cantidad en el carrito
        if (repeat){
            carrito.map((prod)=> {
                if(prod.id === product.id){
                    prod.cantidad++
                }
            });
        } else{        //agrega productos
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            });
        }

        console.log(carrito);
        carritoCounter ();
        saveLocal();
    });

});
///EL CARRRITO SE VERA HACIENDO CLICK AL EMOJI DEL CARRITO