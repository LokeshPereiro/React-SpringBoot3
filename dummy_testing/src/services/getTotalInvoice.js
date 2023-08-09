import { invoice } from "../assets/data/invoice";

export const getTotalInvoice = () => {
  // let total = 0;
  // invoice.items.forEach((item) => {
  //   total = total + item.price * item.quantity;
  // });

  const total = calculateTotal(invoice.items);
  return { ...invoice, total };
};

//Aqí recibe el total y la funcion de arriba impribe el resultado
export const calculateTotal = (items = []) => {
  return (
    items
      .map((item) => item.price * item.quantity)
      //El acumulador es el let total = 0 //currValue cada item.price * item.quantity
      .reduce((accumulator, currValue) => accumulator + currValue, 0)
  );
};
