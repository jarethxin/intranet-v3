import React, { createContext, useContext, useState, useEffect } from "react";
import { login as apiLogin } from "@/services/apiService";

export interface User {
  name: string;
  avatar: string;
}

export interface AuthService {
  isAuthenticated: boolean;
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthService | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      setUser({ name: "Usuario Loggeado", avatar: "" });
    }
  }, []);

  const login = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    try {
      const response = await apiLogin(username, password);
      const userId = response?.userId;
      const token = response?.token;

      if (token) {
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
        // setUser({ name: "Usuario Loggeado", avatar: "" });
        setUser({ name: `User ${userId}`, avatar: "" });
        return true;
      } else {
        throw new Error("No se ha podido obtener el token.");
      }
    } catch (error) {
      console.log(`Error durante el inicio de sesión: ${error}`);
      return false;
    }
  };

  const logout = (): void => {
    try {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      setUser(null);
    } catch (error) {
      console.log(`Error durante el cierre de sesión: ${error}`);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
