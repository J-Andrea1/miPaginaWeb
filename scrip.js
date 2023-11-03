//alert("Hola este es mi Javascript");
/*
let nombre = "Marta";

var nombre1 = "Yuli";

const nombre2 = "Yamel";



console.log(nombre);
console.log(nombre1);
console.log(nombre2);
*/
//FUNCIONES
let nom = "Jeimy";
let ciudad = "Tuluá";
let gusto = "chocolate";
let parrafo = document.querySelector(".parrafo2");

function cambiarTexto(nom, ciudad, gusto){
    let contenido = `Me llamo ${nom}, nací en ${ciudad} y vivo en Tuluá Valle. 
    Me gusta el ${gusto} y salir a pasear. 
    Deseo aprender a programar.` 

    return contenido;
}

parrafo.innerText = cambiarTexto(nom, ciudad, gusto);