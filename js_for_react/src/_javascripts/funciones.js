export function sayHello(nombre) {
  const greeting = `Quien eres?: ${nombre}`;
  return greeting;
}

export const funcionSumar = (a, b) => {
  const total = a + b;
  return total;
};

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
