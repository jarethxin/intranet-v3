import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/globals.css";
import { HomePage } from "@/pages/home";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "./components/general/footer-section";
import { NavigationBarMenu } from "./components/general/navigation-bar-menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { ContactPage } from "./pages/contact";
import { NotFoundPage } from "./pages/not-found";
import { RegisterPage } from "./pages/register";
import { ForgotPasswordPage } from "./pages/forgot-password";
import { AuthProvider } from "./context/authContext";
import { ReportsPage } from "./pages/reports";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <NavigationBarMenu />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
              <Route path="/reports" element={<ReportsPage />} />
            </Routes>
          </div>
          <Footer />
          <Toaster />
        </div>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
