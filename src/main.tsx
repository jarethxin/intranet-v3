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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavigationBarMenu />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
        <Footer />
        <Toaster />
      </div>
    </Router>
  </React.StrictMode>
);
