class Producto {
    constructor(id, tipo, nombre, precio) {
        this.id = id;
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = precio;
    }

    sumaIva(){
        this.precio = this.precio * 1.19;
    }
}
const productos = [];
//Burger
productos.push(new Producto(1,"Burger","Burger Simple",6390));
productos.push(new Producto(2,"Burger","Kids Burger",4990));
productos.push(new Producto(3,"Burger","Classic Burger",6790));
productos.push(new Producto(4,"Burger","Chilean Burger",7390));
//Pizzas
productos.push(new Producto(5,"Pizza","La Pepperoni",12900));
productos.push(new Producto(6,"Pizza","La Pesto",13900));
productos.push(new Producto(7,"Pizza","La Italiana",12900));
productos.push(new Producto(8,"Pizza","La Vegetariana",12900));
//Cocteles
productos.push(new Producto(9,"Cocteles","Mojito",4900));
productos.push(new Producto(10,"Cocteles","Daiquiri",4900));
productos.push(new Producto(11,"Cocteles","Piña Colada",6000));
productos.push(new Producto(12,"Cocteles","Tom Collins",4900));


const resultado1 = productos.filter((el) => el.tipo.includes('Burger'))
const resultado2 = productos.filter((el) => el.tipo.includes('Pizza'))
const resultado3 = productos.filter((el) => el.tipo.includes('Cocteles'))

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)

/*
for (const cat of productos) {
alert(cat.nombre)    
}
*/
let cliente = Number(prompt(`Seleccione los productos que desea ver:
1.- Hamburguesas
2.- Pizzas
3.- Cócteles`))

if (cliente == 1) {
    prompt(`Tenemos estas variedades disponibles: 
    ${resultado1}`)}
   
/*
switch (cliente) {
    case '1':
        prompt(`Tenemos estas variedades disponibles: `+ resultado)
        break;
    case '2':
        prompt(`Tenemos estas variedades disponibles: `+ resultado2)
        break;
    case '3':
        prompt(`Tenemos estas variedades disponibles: `+ resultado3)

        break;
    default:
        break;
   }
   */