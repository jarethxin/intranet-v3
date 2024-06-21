import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/globals.css";
import { HomePage } from "@/pages/home";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "./components/general/footer-section";
import { NavigationBarMenu } from "./components/general/navigation-bar-menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { ContactoPage } from "./pages/contacto";
import { NoEncontradoPage } from "./pages/no-encontrado";
import { NuevoUsuarioPage } from "./pages/nuevo-usuario";
import { ForgotPasswordPage } from "./pages/forgot-password";
import { AuthProvider } from "./context/authContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <NavigationBarMenu />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NoEncontradoPage />} />
              <Route path="/contact" element={<ContactoPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<NuevoUsuarioPage />} />
              <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
            </Routes>
          </div>
          <Footer />
          <Toaster />
        </div>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
