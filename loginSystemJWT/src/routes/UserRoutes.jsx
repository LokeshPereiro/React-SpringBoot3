import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { Navbar } from "../auth/components/Navbar";
import { RegisterPage } from "../auth/pages/RegisterPage";
import { UserProvider } from "../context/UserProvider";

export const UserRoutes = () => {
  return (
    <>
      <UserProvider>
        <Navbar />

        <Routes>
          <Route path="users" element={<LandingPage />} />

          <Route path="users/register" element={<RegisterPage />} />

          <Route path="users/edit/:id" element={<RegisterPage />} />

          <Route path="/" element={<Navigate to={"/users"} />} />
        </Routes>
      </UserProvider>
    </>
  );
};
