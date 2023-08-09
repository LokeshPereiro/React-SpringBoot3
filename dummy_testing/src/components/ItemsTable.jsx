import PropTypes from "prop-types";

export const ItemsTable = ({
  id,
  product,
  price,
  quantity,
  handleDeleteItem,
}) => {
  return (
    <>
      <tr>
        <td>{product}</td>
        <td>{price} €</td>
        <td>{quantity}</td>
        <td>
          <button
            onClick={() => handleDeleteItem(id)}
            className="btn btn-danger"
          >
            Eliminar
          </button>
        </td>
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
