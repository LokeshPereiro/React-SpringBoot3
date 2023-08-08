import { useState } from "react";
import { InvoiceRef } from "./components/InvoiceRef";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { Productstable } from "./components/Productstable";
import { TotalView } from "./components/TotalView";
import { getTotalInvoice } from "./services/getTotalInvoice";

export const InvoiceApp = () => {
  const {
    total,
    id,
    name,
    company,
    client,
    items: initialItems,
  } = getTotalInvoice();

  const [invoiceState, setInvoiceState] = useState({
    product: "",
    price: "",
    quantity: "",
  });
  const { product, price, quantity } = invoiceState;

  //Mapeo previo + los nuevos objs
  const [items, setItems] = useState(initialItems);

  const [counterId, setCounterid] = useState(7);

  const onInputChange = ({ target: { name, value } }) => {
    setInvoiceState({ ...invoiceState, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //validaciones
    if (
      product.trim().length <= 3 ||
      price.trim().length < 1 ||
      price <= 0 ||
      quantity.trim().length < 1 ||
      quantity <= 0
    )
      return;
    if (isNaN(price.trim() || quantity.trim())) return;

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
    //Vaciar despues del submit
    setInvoiceState({
      product: "",
      price: "",
      quantity: "",
    });

    setCounterid(counterId + 1);
  };

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
                </tr>
              </thead>
              <tbody>
                <Productstable items={items} />
              </tbody>
            </table>

            {/* Total  */}
            <TotalView total={total} />

            <form className="mt-3" onSubmit={handleSubmit}>
              <input
                className="form-control mb-3"
                type="text"
                name="product"
                value={product}
                placeholder="Nombre del Producto"
                onChange={onInputChange}
              />
              <input
                className="form-control mb-3"
                type="number"
                name="price"
                value={price}
                placeholder="Precio.."
                onChange={onInputChange}
              />
              <input
                className="form-control mb-3"
                type="number"
                name="quantity"
                value={quantity}
                placeholder="Cantidad.."
                onChange={onInputChange}
              />
              <button type="submit" className="btn btn-secondary">
                Añadir Item
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
