import { useState } from "react";

export const FormItemsView = ({ handler }) => {
  const [invoiceState, setInvoiceState] = useState({
    product: "",
    price: "",
    quantity: "",
  });
  const { product, price, quantity } = invoiceState;

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

    handler(invoiceState);

    //Vaciar despues del submit
    setInvoiceState({
      product: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <>
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
    </>
  );
};
