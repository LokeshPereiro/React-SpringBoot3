import { useReducer } from "react";
import { loginReducers } from "../reducers/loginReducers";
import Swal from "sweetalert2";
import { authServices } from "../services/authServices";

const initialCredentials = JSON.parse(sessionStorage.getItem("login")) || {
  isAuth: false,
  user: undefined,
};
export const useLoginAuth = () => {
  const [login, dispatchLogin] = useReducer(loginReducers, initialCredentials);

  const handleLogin = ({ username, password }) => {
    const isLogin = authServices({ username, password });

    if (isLogin) {
      const user = { username, password };

      dispatchLogin({
        type: "Login",
        payload: user,
      });
      sessionStorage.setItem("login", JSON.stringify({ isAuth: true, user }));
    } else {
      Swal.fire("Error Login", "Username o Password inválidos", "error");
    }
  };
  const handleLogOut = () => {
    dispatchLogin({
      type: "LogOut",
    });
    sessionStorage.removeItem("login");
  };

  return {
    login,
    handleLogin,
    handleLogOut,
  };
};
