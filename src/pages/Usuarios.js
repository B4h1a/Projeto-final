import React from "react";
import '../styles/usuarios.css'
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import HistoryCard from "./Componentes/CartaoHistorico";

export default function Usuarios() {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1, marginTop: 68, backgroundColor: "black" }}>
        <div className="container-usuarios">
          <h1 style={{fontSize:'2.5rem',fontWeight:'bold',color:'white',textAlign:'center'}}>GESTÃO DE USUÁRIOS</h1>
          <HistoryCard/>
          <br/>
          <br/>
          <HistoryCard/>
          <br/>
          <br/>
          <HistoryCard/>
          <br/>
          <br/>
        </div>
      </main>
      <Footer />
    </div>
  );
}
