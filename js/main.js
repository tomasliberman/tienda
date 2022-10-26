let prenda = prompt("Elija su prenda por su numero \n 1) remera $2000 \n 2) campera $4000 \n 3) zapatillas $3500 \n 4) medias $500 \n 5) gorras $1000");

let presupuesto = parseInt(prompt("ingrese cuannto dinero tiene"));
const remera = 2000;
const campera = 4000;
const zapatillas = 3500;
const medias = 500;
const gorras = 1000;

let sobra = presupuesto-remera;

if (presupuesto-remera >= 0){
    alert("puedes comprar el producto"); 
    alert("sobran $"+sobra);

} else if (presupuesto-campera >= 0){
    alert("puedes comprar el producto");
    alert("sobran $"+sobra); 

}else if (presupuesto-zapatillas >= 0){
    alert("puedes comprar el producto"); 
    alert("sobran $"+sobra);

}else if (presupuesto-medias >= 0){
    alert("puedes comprar el producto");
    alert("sobran $"+sobra); 

}else if (presupuesto-gorras >= 0){
    alert("puedes comprar el producto"); 
    alert("sobran $"+sobra);
    

}else {
    alert("su dinero no es suficiente")
}; 

for (let i = 0; presupuesto < 500; i--) {
    if (i < 0) {
        alert ("usted no puede comprar ningun producto");
        break;
    } 
}



