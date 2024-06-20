import { useState } from "react";
import { login as apiLogin } from "@/services/api/apiService";

export interface User {
  name: string;
  avatar: string;
}

export interface AuthService {
  isAuthenticated: boolean;
  user: User;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const useAuth = (): AuthService => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User>({ name: "Usuario Unloggeado", avatar: "" });

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      const response = await apiLogin(username, password);
      const token = response?.token;

      if (token) {
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
        setUser({ name: "Usuario Loggeado", avatar: "" }); // es necesario obtener nombre mediante otra llamada al api o desde la respuesta del login
        return true;
      } else {
        throw new Error("No se ha podido obtener el token en la respuesta.");
      }
    } catch (error) {
      console.log(`AuthService:login | Error durante el inicio de sesión: ${error}`);
      return false;
    }
  };

  const logout = (): void => {
    try {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      setUser({ name: "Usuario Unloggeado", avatar: "" });
    } catch (error) {
      console.log(`AuthService: logout | Error durante el cierre de sesión: ${error}`);
    }
  };

  return { isAuthenticated, user, login, logout };
};

export default useAuth;