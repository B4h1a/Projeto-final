import React from "react";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import CartaoHistorico from "./Componentes/History";
import '../styles/perfil.css'

export default function HistoricoCompras() {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1, marginTop: 68, backgroundColor: "black" }}>
        <h1 className="historico">Historico de Compras</h1>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <CartaoHistorico />
          <CartaoHistorico />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <CartaoHistorico />
          <CartaoHistorico />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <CartaoHistorico />
          <CartaoHistorico />
        </div>

      </main>
      <Footer />
    </div>
  );
}
