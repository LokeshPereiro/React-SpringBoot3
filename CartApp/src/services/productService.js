import { products } from "../data/products";

export const getProducts = () => {
  return products;
};

export const calculateTotal = (cartItems) => {
  return cartItems.reduce(
    (accum, item) => accum + item.product.price * item.quantity,
    0
  );
};
