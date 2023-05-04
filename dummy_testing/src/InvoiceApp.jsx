import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceRef } from "./components/InvoiceRef";
import { Productstable } from "./components/Productstable";
import { TotalView } from "./components/TotalView";
import { getInvoice } from "./services/getInvoice";

export const InvoiceApp = () => {
  const { total } = getInvoice();
  const { id, name, company, client, items } = getInvoice();
  const { name: companyName, fiscalNumber } = company;
  const { name: clientName, lastName, address } = client;

  return (
    <div className="container">
      <div className="card my-3">
        <h1 className="card-header text-center">Ref. Factura</h1>
        {/* <pre>{JSON.stringify(invoice, null, 5)}</pre> */}
        <div className="card-body">
          <InvoiceRef id={id} name={name} />

          <div className="row my-3">
            <div className="col">
              <h3>Datos Cliente</h3>
              <ClientView
                clientName={clientName}
                lastName={lastName}
                address={address}
              />
            </div>

            <div className="col">
              <h3>Datos Empresa</h3>
              <CompanyView
                companyName={companyName}
                fiscalNumber={fiscalNumber}
              />
            </div>
          </div>

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
            <TotalView total={total} />
            <form className="mt-3">
              <input
                className="form-control mb-3"
                type="text"
                name="product"
                placeholder="Nombre Producto"
              />
              <input
                className="form-control mb-3"
                type="number"
                name="price"
                placeholder="Precio.."
              />
              <input
                className="form-control mb-3"
                type="number"
                name="quantity"
                placeholder="Cantidad.."
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
