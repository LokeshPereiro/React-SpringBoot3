import { Add_Items, Update_Items, Delete_Items } from "./itemsActions";

export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case Add_Items:
      return [
        ...state,
        {
          product: action.payload,
          quantity: 1,
        },
      ];
    case Update_Items:
      return state.map((i) => {
        if (i.product.id === action.payload.id) {
          // i.quantity++;
          return {
            ...i,
            quantity: i.quantity + 1,
          };
        }
        return i;
      });
    case Delete_Items:
      return state.filter((i) => i.product.id !== action.payload);

    default:
      return state;
  }
};
