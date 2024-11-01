import React from "react";
import Header from "./Componentes/Header";
import '../styles/vendas.css'
import Footer from "./Componentes/Footer";
import VendasCard from "./Componentes/CartaoVendas";

export default function Vendas() {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1, marginTop: 60, backgroundColor: "black" }}>
        <h1 style={{ textAlign: "center", color: "white" }}>Vendas Realizadas</h1>
        <VendasCard />
      </main>
      <Footer />
    </div>
  );
}
