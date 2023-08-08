import PropTypes from "prop-types";

export const ItemsTable = ({ id, product, price, quantity }) => {
  return (
    <>
      <tr key={id}>
        <td>{product}</td>
        <td>{price} €</td>
        <td>{quantity}</td>
      </tr>
    </>
  );
};

ItemsTable.propTypes = {
  id: PropTypes.number,
  product: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};
