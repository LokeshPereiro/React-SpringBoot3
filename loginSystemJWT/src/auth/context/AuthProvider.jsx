import { useLoginAuth } from "../hooks/useLoginAuth";
import { AuthContext } from "./AuthContext";
export const AuthProvider = ({ children }) => {
  const { login, handleLogin, handleLogOut } = useLoginAuth();

  return (
    <AuthContext.Provider value={{ login, handleLogin, handleLogOut }}>
      {children}
    </AuthContext.Provider>
  );
};
