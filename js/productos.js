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

