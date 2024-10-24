import React from "react";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import '../styles/detalhesvendas.css';


export default function DetalhesVenda() {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1, marginTop: 68, backgroundColor: 'black' }}>
      <div className="product-form-detalhe">
        <div className="product-name-detalhe">
          <input type="text" id="nome" placeholder="Nome do Produto" />
        </div>

        {/* Imagem do Produto */}
        <div className="product-image-detalhe">
          <div className="image-box-detalhe">
            <span>Adicionar Imagem</span>
          </div>
          <div className="image-options-detalhe">
            <p style={{color:"white", fontSize:25}}>Vendido e entregue por: TORA'S</p>
            <input style={{height:30, width:200}} type="text"placeholder="R$:00,00" />
            <br/>
            <br/>
          <a href="/"><button style={{width:300}} class="button-55" role="button">Adicionar Produto</button></a>
          <a href="/"><button style={{width:300}} class="button-55" role="button">Editar Produto</button></a>
          <a href="/"><button style={{width:300}} class="button-55" role="button">Remover Produto</button></a>
          </div>
        </div>

        {/* Detalhe do Produto */}
        <div className="product-details-detalhe">
          <h2>Detalhe do Produto</h2>
          <textarea placeholder="Descrição do Produto"></textarea>
        </div>

        {/* Ficha Técnica */}
        <div className="technical-sheet-detalhe">
          <h2>Ficha Técnica</h2>
          <textarea placeholder="Ficha Técnica do Produto"></textarea>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}
