import { useEffect, useReducer, useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { itemsReducer } from "./reducer/itemsReducer";

const initialCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

export const CartAppReducer = () => {
  const [itemsCart, dispatch] = useReducer(itemsReducer, initialCartItems);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(itemsCart));
  }, [itemsCart]);

  const handleProductCard = (product) => {
    // console.log(product);
    const wishedItem = itemsCart.find((i) => i.product.id === product.id);

    if (wishedItem) {
      dispatch({
        type: "Update Items",
        payload: product,
      });
    } else {
      dispatch({
        type: "Add Items",
        payload: product,
      });
    }
  };

  const handleDeleteProduct = (id) => {
    dispatch({
      type: "Delete Items",
      payload: id,
    });
  };

  return (
    <>
      <div className="container">
        <h3>Cart App</h3>
        <CatalogView handlerAdd={handleProductCard} />

        {itemsCart.length <= 0 || (
          <div className="my-4 w-50">
            <CartView
              itemsCart={itemsCart}
              handlerDelete={handleDeleteProduct}
            />
          </div>
        )}
      </div>
    </>
  );
};
