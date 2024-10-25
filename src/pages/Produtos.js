import React from "react";
import Header from './Componentes/Header';
import Footer from "./Componentes/Footer";
import '../styles/pagina-produto.css';

export default function Produtos() {
  return (
    <div className="product-page">
      <Header />
      <main className="product-main">
        <h1 className="product-name">Nome Do Produto</h1>
        
        <div className="product-info">
          <div className="product-image-container">
            <div className="product-image" />
          </div>
          <div className="product-details">
            <p className="product-title">
              Vendido e entregue por: TORA's |
              <span className="in-stock">Em estoque</span>
            </p>
            <p className="product-shipping">
              Frete grátis
              <span className="cep-info"> - Consulte disponibilidade de seu CEP</span>
            </p>
            <p className="product-price">DE: R$15.554,44</p>
            <p className="product-price">
              POR: <span className="discount-price">R$13.299,44</span>
            </p>
            <a href="/finalizar-compra">
              <button className="button-50" role="button">Comprar</button>
            </a>
            <p className="product-discount">À vista no PIX com até 10% OFF</p>
            <p className="product-payment">Em até 10x de R$1.399,90 sem juros no cartão</p>
            <p className="product-payment">Ou em 1x no cartão com até 30% OFF</p>
          </div>
        </div>

        <div className="product-description">
          <h2>Detalhe do Produto</h2>
          <p>aaaaaaaaaaaaaaaaaaaaaaaaa</p>
          <h2>Ficha Técnica</h2>
          <p>aaaaaaaaaaaaaaaaaaaaaaaaa</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
