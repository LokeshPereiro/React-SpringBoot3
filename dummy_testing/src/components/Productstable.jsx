import PropTypes from "prop-types";

export const Productstable = ({ items }) => {
  return (
    <>
      {items.map(({ id, product, price, quantity }) => {
        return (
          <tr key={id}>
            <td>{product}</td>
            <td>{price} €</td>
            <td>{quantity}</td>
          </tr>
        );
      })}
    </>
  );
};

Productstable.propTypes = {
  items: PropTypes.array,
};
