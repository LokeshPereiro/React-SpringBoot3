import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CatalogView } from "../components/CatalogView";
import { CartView } from "../components/CartView";

export const CartRoutes = ({
  handleProductCard,
  cartItems,
  handleDeleteProduct,
}) => {
  return (
    <>
      <Routes>
        <Route
          path="catalog"
          element={<CatalogView handlerAdd={handleProductCard} />}
        />
        <Route
          path="cart"
          element={
            cartItems.length <= 0 ? (
              <div className="alert alert-warning">
                No hay productos en el carrito!
              </div>
            ) : (
              <div className="my-4 w-50">
                <CartView
                  cartItems={cartItems}
                  handlerDelete={handleDeleteProduct}
                />
              </div>
            )
          }
        />
        <Route path="/" element={<Navigate to={"/catalog"} />} />
      </Routes>
    </>
  );
};
