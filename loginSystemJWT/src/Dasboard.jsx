import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./auth/pages/LoginPage";
import { useLoginAuth } from "./auth/hooks/useLoginAuth";
import { UserRoutes } from "./routes/UserRoutes";

export const Dasboard = () => {
  const { login, handleLogin, handleLogOut } = useLoginAuth();

  return (
    <Routes>
      {login.isAuth ? (
        <Route
          path="/*"
          element={<UserRoutes login={login} handleLogOut={handleLogOut} />}
        />
      ) : (
        <>
          <Route
            path="/login"
            element={<LoginPage handleLogin={handleLogin} />}
          />
          <Route path="/*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
};
