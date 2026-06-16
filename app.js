
const productos = [
    {
        id: 1,
        titulo: 'Tv Samsung 52"',
        precio: 3000,
        descripcion: 'Tv muy buena para ver el mundial',
        categoria: ['Tecnologia', 'Hogar'],
        stock: 40
    },
    {
        id: 2,
        titulo: 'Notebook Lenovo ThinkPad',
        precio: 5200,
        descripcion: 'Ideal para trabajo y programación',
        categoria: ['Tecnologia', 'Oficina'],
        stock: 15
    },
    {
        id: 3,
        titulo: 'Mouse Logitech G502',
        precio: 450,
        descripcion: 'Mouse gamer de alta precisión',
        categoria: ['Tecnologia', 'Gaming'],
        stock: 75
    },
    {
        id: 4,
        titulo: 'Silla Ergonómica',
        precio: 1800,
        descripcion: 'Silla cómoda para largas jornadas',
        categoria: ['Oficina', 'Hogar'],
        stock: 20
    },
    {
        id: 5,
        titulo: 'Teclado Mecánico Redragon',
        precio: 900,
        descripcion: 'Teclado RGB con switches mecánicos',
        categoria: ['Tecnologia', 'Gaming'],
        stock: 35
    },
    {
        id: 6,
        titulo: 'Monitor LG 27"',
        precio: 2500,
        descripcion: 'Monitor Full HD para trabajo y juegos',
        categoria: ['Tecnologia', 'Gaming'],
        stock: 18
    },
    {
        id: 7,
        titulo: 'Escritorio de Madera',
        precio: 2200,
        descripcion: 'Escritorio amplio para oficina o estudio',
        categoria: ['Oficina', 'Hogar'],
        stock: 12
    }
];
/* 
    1- crear una funcion llamada obtenerPorId que reciba el numero de id, la lista productos y retorne el producto que tenga el id buscado
    2- crear una funcion llamada existeCategoria que recibe una categoria, la lista de productos y te retorna un boolean marcando si la categoria ya existe en algun producto de la lista
        existeCategoria('Tecnologia', productos) => true
        existeCategoria('Limpieza', productos) => false
    3- crear una funcion llamada obtenerProductoEntreRangoPrecios(max, min, productos) y te devuelva los productos que esten en ese rango de precios
    4- crear la funcion obtenerProductoCercaSinStock(limite, productos) te devuelve todos los productos que esten con un stock igual o menor al limite
    5- crear la funcion obtenerEstimadoVentaBruta(productos) que debera retornar el total de la sumatoria de todos los precios por stock

*/
/* 1) 
*/
console.log("1)--------------------obtenerPorId--------------------");
let idProducto = 2
const obtenerPorId = (id, productos) => {
    for (let producto of productos) {
        if (producto.id === id) {
            return producto;
        }
    }
    return resultado;
}
const mostrarProducto = producto => `${producto.titulo} con un de precio: ${producto.precio} y hay un stock de : ${producto.stock} unidades`;

let productoIdEncontrado = obtenerPorId(idProducto, productos);
console.log(`El producto id ${idProducto} es: ${mostrarProducto(productoIdEncontrado)}`);

//Alternativa con metodo find
const obtenerPorId1 = (id, productos) => productos.find(producto => producto.id === id)
let productoId1 = obtenerPorId1(idProducto, productos);
console.log(`El producto id ${idProducto} es: ${mostrarProducto(productoId1)} desde el metodo find`);


/*  2) 
 */
console.log("2)-------------------existeCategoria-------------------");
const existeCategoria = (categoria, productos) => {
    for (let producto of productos) {
        if (producto.categoria.includes(categoria)) {
            existenciaCategoria = true;
            break;
        }
    }
    return false;
}


console.log(`La categoria Tecnologia ${(existeCategoria('Tecnologia', productos) ? 'Si existe' : 'No existe')}`);
console.log(`La categoria Limpieza ${(existeCategoria('Limpieza', productos) ? 'Si existe' : 'No existe')}`);

//alternativa con metodo some
const existeCategoria1 = (categoria, productos) =>
    productos.some(producto => producto.categoria.includes(categoria))

console.log(`La categoria Tecnologia ${(existeCategoria1('Tecnologia', productos) ? 'Si existe desde el metodo some' : 'No existe desde el metodo some')}`);
console.log(`La categoria Limpieza ${(existeCategoria1('Limpieza', productos) ? 'Si existe desde el metodo some' : 'No existe desde el metodo some')}`);

/* 
   3) 
 */
console.log("3)----------obtenerProductoEntreRangoPrecios--------------");
let maximo = 5000;
let minimo = 1000;
const obtenerProductoEntreRangoPrecios = (min, max, productos) => {
    const arrayProductosRango = [];
    for (let producto of productos) {
        if (producto.precio >= min && producto.precio <= max) {
            arrayProductosRango.push(producto);
        }
    }
    return arrayProductosRango;
}
const mostrarProductosEntreRangosPrecios = arrayProductosRango => {
    console.log(`Los productos entre el rango de precios son: `);
    for (let producto of arrayProductosRango) {
        console.log(`${producto.titulo} con un precio de: ${producto.precio}`);
    }
}

let arrayProductosRango = obtenerProductoEntreRangoPrecios(minimo, maximo, productos);
mostrarProductosEntreRangosPrecios(arrayProductosRango);

//Alternativa con metodo filter
const obtenerProductoEntreRangoPrecios1 = (min, max, productos) => 
        productos.filter(producto => producto.precio >= min && producto.precio <= max);
let arrayProductosRango1 = obtenerProductoEntreRangoPrecios1(minimo, maximo, productos);
console.log("----------------desde el metodo filter");
mostrarProductosEntreRangosPrecios(arrayProductosRango1);


/* 4) 
*/
console.log("4)-----------obtenerProductoCercaSinStock---------------");
let limiteStock = 20
const obtenerProductoCercaSinStock = (limite, productos) => {
    const arrayProductosLimiteStock = []
    for (let producto of productos) {
        if (producto.stock <= limite) {
            arrayProductosLimiteStock.push(producto);
        }
    }
    return arrayProductosLimiteStock;
}

const mostrarProductosCercaSinStock = (arrayProductosLimiteStock, limiteStock) => {
    console.log(`Los productos con stock menor o cerca a ${limiteStock} son: `);
    for (let producto of arrayProductosLimiteStock) {
        console.log(`${producto.titulo} con un stock de: ${producto.stock}`);
    }
}
let arrayProductosLimiteStock = (obtenerProductoCercaSinStock(limiteStock, productos));
mostrarProductosCercaSinStock(arrayProductosLimiteStock, limiteStock);

//alternativa con metodo filter  
const obtenerProductoCercaSinStock1 = (limite, productos) => productos.filter(producto => producto.stock <= limite);

let arrayProductosLimiteStock1 = (obtenerProductoCercaSinStock(limiteStock, productos));
console.log("-------------Desde el metodo filter");
mostrarProductosCercaSinStock(arrayProductosLimiteStock1, limiteStock);
 

/* 5) 
*/
console.log("5)-----------obtenerEstimadoVentaBruta--------------");
const obtenerEstimadoVentaBruta = productos => {
    let resultado= 0;
    for (let producto of productos) {
        resultado += producto.precio * producto.stock;
    }
    return resultado;
}

console.log(`El total de venta bruta estimada: $${obtenerEstimadoVentaBruta(productos)}`);

//alternativa con metodo reduce 
const obtenerEstimadoVentaBruta1 = productos => productos.reduce((acumulador, producto) => acumulador + producto.precio * producto.stock, 0);

console.log(`El total de venta bruta estimada: $${obtenerEstimadoVentaBruta1(productos)} desde el metodo reduce`);