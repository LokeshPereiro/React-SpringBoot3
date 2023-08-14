import React from "react";

export const loginReducers = (state = {}, action) => {
  switch (action.type) {
    case "Login":
      return {
        isAuth: true,
        user: action.payload,
      };

    case "LogOut":
      return {
        isAuth: false,
      };

    default:
      return state;
  }
};
