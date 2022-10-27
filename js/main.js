let prenda =parseInt (prompt("Elija la prenda por su numero \n 1) remera $2000 \n 2) campera $4000 \n 3) zapatillas $3500 \n 4) medias $500 \n 5) gorras $1000"));

let presupuesto = parseInt(prompt("ingrese cuanto dinero tiene"));
const remera = 2000;
const campera = 4000;
const zapatillas = 3500;
const medias = 500;
const gorras = 1000;

let sobra;

if (prenda == 1 && presupuesto >= remera) {
    sobra = presupuesto - remera;
    alert("puede comprar el producto, sobram $" + sobra );
     
}else if (prenda == 2 && presupuesto >= campera) {
    sobra = presupuesto - campera;
    alert("puede comprar el producto, sobran $" + sobra);
    
    
}else if (prenda == 3 && presupuesto >= zapatillas) {
    sobra = presupuesto - zapatillas;
    alert("puede comprar el producto, sobran $" + sobra);
    
    
}else if (prenda == 4 && presupuesto >= medias) {
    sobra = presupuesto - medias;
    alert("puede comprar el producto, sobran $" + sobra);
   
    
}else if (prenda == 5 && presupuesto >= gorras) {
    sobra = presupuesto - gorras;
    alert("puede comprar el producto, sobran $" + sobra);
    
    
}else {
    alert("su dinero no es suficiente")
}

for (let i = 0; presupuesto < 500; i--) {
    if (i < 0) {
        alert ("usted no puede comprar ningun producto");
        break;
    } 
}

for (let i = 0; sobra < 0; i--) {
    if (i < 0) {
        sobra = 0;
        break;
    } 
}



