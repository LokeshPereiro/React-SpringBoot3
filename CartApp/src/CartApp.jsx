import { useItemsCart } from "./hooks/useItemsCart";
import { Navbar } from "./components/Navbar";
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {
  const { cartItems, handleProductCard, handleDeleteProduct } = useItemsCart();
  return (
    <>
      <Navbar />

      <div className="container my-4">
        <h3>Cart App</h3>
        <CartRoutes
          cartItems={cartItems}
          handleProductCard={handleProductCard}
          handleDeleteProduct={handleDeleteProduct}
        />
      </div>
    </>
  );
};
