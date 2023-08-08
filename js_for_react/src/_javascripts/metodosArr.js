const raton33 = {
  product: "Mouse33",
  precio: 501,
  cantidad: 43,
};
export const invoice = [
  {
    id: 1,
    name: "Persona1",
    date: new Date(),
    items: [
      {
        product: "Monitor1",
        precio: 500,
        cantidad: 1,
      },
      {
        product: "Teclado1",
        precio: 200,
        cantidad: 1,
      },
      {
        product: "Speaker1",
        precio: 80,
        cantidad: 1,
      },
      {
        product: "Mouse1",
        precio: 50,
        cantidad: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Persona2",
    date: new Date(),
    items: [
      {
        product: "Monitor2",
        precio: 500,
        cantidad: 2,
      },
      {
        product: "Teclado2",
        precio: 200,
        cantidad: 2,
      },
      {
        product: "Speaker2",
        precio: 80,
        cantidad: 2,
      },
      raton33,
    ],
  },
  {
    id: 3,
    name: "Persona3",
    date: new Date(),
    items: [
      {
        product: "Monitor3",
        precio: 500,
        cantidad: 3,
      },
      {
        product: "Teclado3",
        precio: 200,
        cantidad: 3,
      },
      {
        product: "Speaker3",
        precio: 80,
        cantidad: 3,
      },
      raton33,
    ],
  },
];

// #forEach Vs. Map
//forEach --> Por lo general es para ejecutar algo, mostrar alguna informacion, para iterar... es IMPERATIVO. No retorna nada, no modifica nada!. Ex. Una funcion que no devuelve nada

//Map --> Se recibe el obj y podemos hacer algo con cada iteracion pero devuelve el objeto clonado aloriginal no modifica al orginal... es DECLARATIVO Ex. Una funcion que devuelve algo pero con algún calculo, modificacion...

const invoiceMap = invoice.map((inv) => {
  return inv.name;
});
// console.log(invoiceMap);

//Find --> Nos permide buscar 'x' cosas por un atributo
const invoiceFind = invoice.find((i) => i.name === "Persona2");
//onsole.log(invoiceFind);

//Filter --> Si una condicion se cumple, crea ese arreglo con la condicion verdadera
const invoiceFilter = invoice.filter((i) => i.id != 1);
// console.log(invoiceFilter);

//Esto no sería posible ya que el filter funciona por referencian, y no por el valor
const invoiceFilter2 = invoice.filter((i) => i.items.includes(raton33));
console.log(invoiceFilter2);

//Some --> Nos devuelve true or false segun se cumple la condicion
const invoiceSome = invoice.some((i) => i.name === "Persona2");
console.log(invoiceSome);
