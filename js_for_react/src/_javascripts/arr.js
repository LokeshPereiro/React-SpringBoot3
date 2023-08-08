const animales = ["Perro", "Gato", "Pato"];
//A diferencia del push, concat no modifica el arr original, nos devuelve una nueva instancia clonada
const animales2 = animales.concat("Centaoro");
console.log(animales2);
// console.log(animales);
animales.push("Caballo");
// console.log(animales);

// animales.forEach((animal) => console.log(animal));

// for (const x of animales) {
//   console.log(x);
// }

// for (let i = 0; i < animales.length; i++) {
//   console.log(animales[i]);
// }

const frutas = ["Mazana", "Mango", "Uvas"];

//Combinamos dos arreglos en uno
const supermercado = [...animales, ...frutas, "Unicornio"];

console.log(supermercado);
