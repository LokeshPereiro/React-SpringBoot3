import { useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";

const initialCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

export const CartApp = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleProductCard = (product) => {
    // console.log(product);
    const wishedItem = cartItems.find((i) => i.product.id === product.id);

    if (wishedItem) {
      //   setCartItems([
      //     ...cartItems.filter((i) => i.product.id !== product.id),
      //     {
      //       product,
      //       quantity: wishedItem.quantity + 1,
      //     },
      //   ]);
      setCartItems(
        cartItems.map((i) => {
          if (i.product.id === product.id) {
            i.quantity++;
          }
          return i;
        })
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          product,
          quantity: 1,
        },
      ]);
    }
  };

  const handleDeleteProduct = (id) => {
    setCartItems([...cartItems.filter((i) => i.product.id !== id)]);
  };

  return (
    <>
      <div className="container">
        <h3>Cart App</h3>
        <CatalogView handlerAdd={handleProductCard} />

        {cartItems.length <= 0 || (
          <div className="my-4 w-50">
            <CartView
              cartItems={cartItems}
              handlerDelete={handleDeleteProduct}
            />
          </div>
        )}
      </div>
    </>
  );
};
