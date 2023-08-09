import { useEffect, useState } from "react";
import { InvoiceRef } from "./components/InvoiceRef";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { Productstable } from "./components/Productstable";
import { TotalView } from "./components/TotalView";
import { calculateTotal, getTotalInvoice } from "./services/getTotalInvoice";
import { FormItemsView } from "./components/FormItemsView";

//Estado inicial del Invoice sin datos pero respetando la estructura
const initialInvoice = {
  id: 0,
  name: "",
  client: {
    firstName: "",
    lastName: "",
    address: {
      country: "",
      city: "",
      street: "",
    },
  },
  company: {
    companyName: "",
    fiscalNumber: 0,
  },
  items: [],
};
export const InvoiceApp = () => {
  const [activeForm, setActiveForm] = useState(false);

  const [total, setTotal] = useState(0);
  const [counterId, setCounterid] = useState(7);
  const [invoice, setInvoice] = useState(initialInvoice);
  //Solo va a manejar los estodos de los items
  const [items, setItems] = useState([]);

  const { id, name, company, client } = invoice;

  useEffect(() => {
    const data = getTotalInvoice();
    setInvoice(data);
    // console.log(data);

    setItems(data.items);
    // console.log(items);
  }, []);

  const handlerInvoiceItems = ({ product, price, quantity }) => {
    setItems([
      ...items,
      {
        id: counterId,
        product: product,
        //1.Opcion -> Operador Unario (+) para convertir un string en un numero
        price: +price,
        //2.Opcion -> parseInt(string, baseNumerica)
        quantity: parseInt(quantity, 10),
      },
    ]);

    setCounterid(counterId + 1);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const onActiveForm = () => {
    setActiveForm(!activeForm);
  };

  useEffect(() => {
    setTotal(calculateTotal(items));
  }, [items]);

  return (
    <div className="container">
      <div className="card my-3">
        {/* Heading */}
        <h1 className="card-header text-center">Ref. Factura</h1>

        <div className="card-body">
          {/* Invoice ref id & billing company */}
          <InvoiceRef id={id} name={name} />

          {/* Client ref */}
          <div className="row my-3">
            <div className="col">
              <ClientView title={"Datos del Cliente"} client={client} />
            </div>

            {/* Company ref */}
            <div className="col">
              <CompanyView title={"Datos de la Empresa"} company={company} />
            </div>
          </div>

          {/* Purchased items  */}
          <div className="row">
            <h3 className="text-center">
              <i>Productos Comprados</i>
            </h3>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                <Productstable
                  items={items}
                  handleDeleteItem={(id) => handleDeleteItem(id)}
                />
              </tbody>
            </table>

            {/* Total  */}
            <TotalView total={total} />
            <button onClick={onActiveForm} className="mt-2 bg-warning">
              {!activeForm ? "Mostrar Form" : "Ocultar"}
            </button>
            {!activeForm || <FormItemsView handler={handlerInvoiceItems} />}
          </div>
        </div>
      </div>
    </div>
  );
};
