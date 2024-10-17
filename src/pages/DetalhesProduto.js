import React from "react";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import '../styles/produto.css'
import Cartao from "./Componentes/Cartao";

export default function DetalhesProduto() {
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between",minHeight:"100vh"}}>
      <Header/>
      <main style={{flex:1, marginTop:68, backgroundColor:"black"}}>
        <div className="linhaCartao">
          <Cartao/>
          <Cartao/>
          <Cartao/>
        </div>
        <br></br>
        <br></br>
      </main>
      <Footer/>
    </div>
  );
}
