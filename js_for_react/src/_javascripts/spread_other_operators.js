export const invoice = {
  id: 10,
  name: "Hola Hola",
  date: new Date(),
  saludos: () => {
    //Para acceder a las propiedades del objeto con el arrow funcion, tenemos que hacerlo sin la palabra reservada "this"
    return `Saludos ${invoice.name}`;
  },
  items: [
    {
      product: "Monitor",
      precio: 500,
      cantidad: 2,
    },
    {
      product: "Teclado",
      precio: 200,
      cantidad: 2,
    },
    {
      product: "Speaker",
      precio: 80,
      cantidad: 4,
    },
    {
      product: "Mouse",
      precio: 50,
      cantidad: 2,
    },
  ],
  total: function () {
    let total = 0;
    this.items.forEach((item) => {
      total = total + item.precio * item.cantidad;
    });
    return total;
  },
};

//Con el spread clonamos el objeto con todas sus propiedades, por lo tanto, podemos trabajar con este nuevo obj sin modificar nada en el original

const invoice2 = { ...invoice };

const res = invoice === invoice2;

if (res) {
  console.log(res);
} else {
  console.log("No son iguales..");
}

invoice.id = 1000;
console.log(invoice.id);
console.log(invoice2.id);

/* Operator Optional Changing */
//Va a ser muy útil cuando trabajemos con API REST, pues, a veces un atributo o propiedades puede venir o no
//Sirven para evitar mostrar undefinied o errores fatales
console.log(invoice.company?.name);

/* Operator Ternario */
const media = 4.9;

const nota = media >= 5 ? "Aprobado" : "Suspenso";
console.log(nota);
