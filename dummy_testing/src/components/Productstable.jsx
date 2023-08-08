import PropTypes from "prop-types";
import { ItemsTable } from "./ItemsTable";

export const Productstable = ({ items }) => {
  return (
    <>
      {items.map(({ id, product, price, quantity }) => {
        return (
          <ItemsTable
            key={id}
            product={product}
            price={price}
            quantity={quantity}
          />
        );
      })}
    </>
  );
};

Productstable.propTypes = {
  items: PropTypes.array,
};
