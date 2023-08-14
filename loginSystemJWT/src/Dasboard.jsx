import { LoginPage } from "./auth/pages/LoginPage";
import { LandingPage } from "./pages/LandingPage";
import { Navbar } from "./auth/components/Navbar";
import { useLoginAuth } from "./auth/hooks/useLoginAuth";
// import { LandingPage } from "./pages/LandingPage";

export const Dasboard = () => {
  const { login, handleLogin, handleLogOut } = useLoginAuth();

  return (
    <>
      {login.isAuth ? (
        <>
          <Navbar login={login} handleLogOut={handleLogOut} />
          <LandingPage />
        </>
      ) : (
        <LoginPage handleLogin={handleLogin} />
      )}
    </>
  );
};
