import { useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";

const initialCartItems = [
  {
    product: {
      id: 1,
      name: "Keboard RPC",
      description: "Lorem de los lorem ..",
      price: 100,
    },
    quantity: 0,
    total: 0,
  },
];

export const CartApp = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const handleProductCard = (product) => {
    // console.log(product);
    setCartItems([
      ...cartItems,
      {
        product,
        quantity: 1,
        total: product.price * 1,
      },
    ]);
  };
  //   console.log(cartItems);
  return (
    <>
      <div className="container">
        <h3>Cart App</h3>

        <CatalogView handler={handleProductCard} />

        <div className="my-4 w-50">
          <CartView cartItems={cartItems} />
        </div>
      </div>
    </>
  );
};
