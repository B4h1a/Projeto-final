import React from "react";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import CartaoHistorico from "./Componentes/History";
import '../styles/perfil.css'

export default function Perfil() {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1, marginTop: 60, backgroundColor: "black" }}>
        <div class="container-profile">
          <div class="profile-image">
            Foto
          </div>

          <div class="input-group-profile">
            <h1 className="text-perfil">Nome</h1>
            <input className="input-perfil" type="text" id="username" placeholder="Nome" />
          </div>

          <div class="input-group-profile">
            <h1 className="text-perfil">Email</h1>
            <input className="input-perfil" type="email" id="email" placeholder="Email" />
          </div>

          <div class="input-group-profile">
            <h1 className="text-perfil">Telefone</h1>
            <input className="input-perfil" id="nome" placeholder="telefone" />
          </div>
          <div class="input-group-profile">
            <h1 className="text-perfil">CPF</h1>
            <input className="input-perfil" id="nome" placeholder="CPF" />
          </div>
          <div class="input-group-profile">
            <h1 className="text-perfil">Endereço Completo</h1>
            <input className="input-perfil" id="nome" placeholder="Endereço Completo" />
          </div>
        </div>

        <h1 className="historico">Carrinho de Compras</h1>
        <div className="fica-historico">
          <CartaoHistorico/>
          <CartaoHistorico/>
          <CartaoHistorico/>
          <CartaoHistorico/>

        </div>


      </main>
      <Footer />
    </div>
  );
}
