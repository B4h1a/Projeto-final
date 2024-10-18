import React from "react";
import '../styles/vendas.css'
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import CartaoVendas from "./Componentes/CartaoVendas";

export default function Vendas() {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1, marginTop: 68,backgroundColor:'black' }}>
      <h1 style={{textAlign:'center',color:'white'}}>Vendas Realizadas</h1>
        <CartaoVendas/>
        <br/>
        <br/>
        <br/>
        <br/>
        <CartaoVendas/>
        <br/>
        <br/>
        <br/>
        <br/>
        <CartaoVendas/>
        <br/>
        <br/>
        <br/>
        <br/>
      </main>
      <Footer />
    </div>
  );
}
