import PropTypes from "prop-types";
import { ItemsTable } from "./ItemsTable";

export const Productstable = ({ items, handleDeleteItem }) => {
  return (
    <>
      {items.map(({ id, product, price, quantity }) => {
        return (
          <ItemsTable
            key={id}
            id={id}
            product={product}
            price={price}
            quantity={quantity}
            handleDeleteItem={(id) => handleDeleteItem(id)}
          />
        );
      })}
    </>
  );
};

Productstable.propTypes = {
  items: PropTypes.array,
};
