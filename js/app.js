const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container")
const cantidadCarrito = document.getElementById("cantidadCarrito")
const productos = [
    {
        id: 1,
        nombre: "topper",
        precio: 15500,
        img:"https://i.postimg.cc/8c6hKzjb/z1.jpg",
        cantidad: 1,
        
    },
    {
        id: 2,
        nombre: "converse",
        precio: 13600,
        img: "https://i.postimg.cc/1z84cYgG/z2.jpg",
        cantidad: 1,
    },
    {
        id: 3,
        nombre: "salomon",
        precio: 25300,
        img: "https://i.postimg.cc/1zbXWc6L/z3.jpg",
        cantidad: 1,
    },
    {
        id: 4,
        nombre: "nike-roja",
        precio: 19750,
        img: "https://i.postimg.cc/HsT2DRq8/zap1.jpg",
        cantidad: 1,
    },
    {
        id: 5,
        nombre: "reebok",
        precio: 20222,
        img: "https://i.postimg.cc/nzK5F70H/wengang-zhai-f-OL6ebf-ECQ-unsplash.jpg",
        cantidad: 1,
    },
    {
        id: 6,
        nombre: "nike-rosa",
        precio: 20600,
        img: "https://i.postimg.cc/52JPsj3v/zap4.jpg",
        cantidad: 1,
    },
];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

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

//eliminar producto del carrito
const eliminarProducto = () =>{
    const foundId = carrito.find((element) => element.id);

    carrito= carrito.filter((carritoId) => {
        return carritoId !== foundId;
    })
    carritoCounter();
    pintarCarrito();
}

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