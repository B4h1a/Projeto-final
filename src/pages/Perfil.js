import React from "react";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import '../styles/perfil.css'

export default function Perfil() {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1, marginTop: 68, backgroundColor: "black" }}>
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
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div class="container-historico">
            <div class="left-historico">
              !
            </div>
            <div class="right-historico">
              <p>Produto: Mouse Pad 83cm</p>
              <p>CINZA, DESENHO DO BATMAN COITTO CORINGA</p>
              <p>SUBTOTAL DOS PRODUTOS: R$11.11</p>
              <p>VALOR DO FRETE: R$11.11</p>
              <p>SUBTOTAL DESCONTO DE PRODUTOS: R$11.11</p>
              <p>VALOR DO IOF: R$11.11</p>
              <p>ICMS: R$11.11</p>
              <p>PEDIDO TOTAL: R$11.11</p>
              <p>CÓDIGO DO PEDIDO: 41523892364834446</p>
            </div>
            <div style={{ display: "flex", flexdirection: "column", justifycontent: "flex-end", height: "100%" }}>
              <div style={{ marginTop: "auto" }}>
              <a href="/produto"><button class="button-50" role="button">Ver Mais</button></a>
              </div>
            </div>
          </div>

          <div class="container-historico">
            <div class="left-historico">
              !
            </div>
            <div class="right-historico">
              <p>Produto: Mouse Pad 83cm</p>
              <p>CINZA, DESENHO DO BATMAN COITTO CORINGA</p>
              <p>SUBTOTAL DOS PRODUTOS: R$11.11</p>
              <p>VALOR DO FRETE: R$11.11</p>
              <p>SUBTOTAL DESCONTO DE PRODUTOS: R$11.11</p>
              <p>VALOR DO IOF: R$11.11</p>
              <p>ICMS: R$11.11</p>
              <p>PEDIDO TOTAL: R$11.11</p>
              <p>CÓDIGO DO PEDIDO: 41523892364834446</p>
            </div>
            <div style={{ display: "flex", flexdirection: "column", justifycontent: "flex-end", height: "100%" }}>
              <div style={{ marginTop: "auto" }}>
              <a href="/produto"><button class="button-50" role="button">Ver Mais</button></a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div class="container-historico">
            <div class="left-historico">
              !
            </div>
            <div class="right-historico">
              <p>Produto: Mouse Pad 83cm</p>
              <p>CINZA, DESENHO DO BATMAN COITTO CORINGA</p>
              <p>SUBTOTAL DOS PRODUTOS: R$11.11</p>
              <p>VALOR DO FRETE: R$11.11</p>
              <p>SUBTOTAL DESCONTO DE PRODUTOS: R$11.11</p>
              <p>VALOR DO IOF: R$11.11</p>
              <p>ICMS: R$11.11</p>
              <p>PEDIDO TOTAL: R$11.11</p>
              <p>CÓDIGO DO PEDIDO: 41523892364834446</p>
            </div>
            <div style={{ display: "flex", flexdirection: "column", justifycontent: "flex-end", height: "100%" }}>
              <div style={{ marginTop: "auto" }}>
              <a href="/produto"><button class="button-50" role="button">Ver Mais</button></a>
              </div>
            </div>
          </div>

          <div class="container-historico">
            <div class="left-historico">
              !
            </div>
            <div class="right-historico">
              <p>Produto: Mouse Pad 83cm</p>
              <p>CINZA, DESENHO DO BATMAN COITTO CORINGA</p>
              <p>SUBTOTAL DOS PRODUTOS: R$11.11</p>
              <p>VALOR DO FRETE: R$11.11</p>
              <p>SUBTOTAL DESCONTO DE PRODUTOS: R$11.11</p>
              <p>VALOR DO IOF: R$11.11</p>
              <p>ICMS: R$11.11</p>
              <p>PEDIDO TOTAL: R$11.11</p>
              <p>CÓDIGO DO PEDIDO: 41523892364834446</p>
            </div>
            <div style={{ display: "flex", flexdirection: "column", justifycontent: "flex-end", height: "100%" }}>
              <div style={{ marginTop: "auto" }}>
              <a href="/produto"><button class="button-50" role="button">Ver Mais</button></a>
              </div>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
