import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { Add_Items, Update_Items, Delete_Items } from "../reducer/itemsActions";

const initialCartItems = JSON.parse(sessionStorage.getItem("carrito")) || [];

export const useItemsCart = () => {
  // const [cartItems, setCartItems] = useState(initialCartItems);
  const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

  useEffect(() => {
    sessionStorage.setItem("carrito", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleProductCard = (product) => {
    // console.log(product);
    const wishedItem = cartItems.find((i) => i.product.id === product.id);

    if (wishedItem) {
      dispatch({
        type: Update_Items,
        payload: product,
      });
    } else {
      dispatch({
        type: Add_Items,
        payload: product,
      });
    }
  };

  const handleDeleteProduct = (id) => {
    dispatch({
      type: Delete_Items,
      payload: id,
    });
  };
  return {
    cartItems,
    handleProductCard,
    handleDeleteProduct,
  };
};
