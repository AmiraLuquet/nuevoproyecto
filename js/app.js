const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container")
const cantidadCarrito = document.getElementById("cantidadCarrito")



///crea el modal y pinta el carrito mientras se agrega cosas//
const pintarCarrito = () =>{
    modalContainer.innerHTML= "";
    modalContainer.style.display="flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Cerrar</h1>
    `;
    
    modalContainer.append(modalHeader);
    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display= "none";
    })

    modalHeader.append(modalbutton);

    carrito.forEach((product) =>{
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>${product.precio}</p>
            <p>cantidad: ${product.cantidad}</p>
            <p> total: ${product.cantidad * product.precio}</p>
        
        `;

        modalContainer.append(carritoContent);
        let eliminar = document.createElement("span");
        eliminar.innerText= "❌"
        eliminar.className= "delete-product";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click" , eliminarProducto)
    })
    //footer del modal
    const total= carrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);
    const totalBuying = document.createElement("div");
    totalBuying.className ="total-content";
    totalBuying.innerHTML = `total a pagar: $ ${total}`;
    modalContainer.append(totalBuying);

}
verCarrito.addEventListener("click", pintarCarrito);





//eliminar producto del carrito///
const eliminarProducto = () =>{
    const foundId = carrito.find((element) => element.id);

    carrito= carrito.filter((carritoId) => {
        return carritoId !== foundId;
    })
    ///actualiza el contador si se eliminia un producto///
    carritoCounter();
    pintarCarrito();
}




//se guarda el contador del carrito en el json///
const carritoCounter = () => {
    cantidadCarrito.style.display= "block";
    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength" , JSON.stringify(carritoLength))
    cantidadCarrito.innerText= JSON.parse(localStorage.getItem(""))
}
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));

};
carritoCounter()


fetch('http://localhost:5502/productos.json')
  .then(response => response.json())
  .then(data => console.log(data));


  function mostrar(){
    swal('Ofertones!!','Disfruta de un descuento del 25% durante todo diciembre!!!','confirm');
  }