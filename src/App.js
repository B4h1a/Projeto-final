import React from "react";
import AppRoutes from "./routes";
import { AuthProvider } from "./contexts/AuthContext";
import "./styles/global.css";
import Header from "./pages/Componentes/Header";
import Footer from "./pages/Componentes/Footer";

export default function App() {
  return (
    <AuthProvider>
      <div className="App">
        <AppRoutes />
      </div>
    </AuthProvider>
  );
}
