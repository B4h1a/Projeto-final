import React from "react";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import '../styles/produto.css'

export default function DetalhesProduto() {
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between",minHeight:"100vh"}}>
      <Header/>
      <main style={{flex:1, marginTop:68}}>
        <div className="cartao">
          <img src="https://static.gigabyte.com/StaticFile/Image/Global/05d0303199648d6f786f1b50a9acfd83/Product/41061/webp/400"></img>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
