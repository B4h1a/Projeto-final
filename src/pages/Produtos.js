import React from "react";
import Header from './Componentes/Header'
import Footer from "./Componentes/Footer";
import '../styles/produto.css';

export default function Produtos() {
  return (
    <div className="product-page">
      <Header/>
      <main style={{ flex: 1, marginTop: 68, backgroundColor: "black" }}>
      <h1 style={{padding:30}}>Nome Do Produto</h1>
      <div style={{display:"flex", flexDirection:"row"}}>
      <div className="product-image-container">
        <div className="product-image" />
      </div>
      <div className="product-details">
        <p className="product-title">Vendido e entregue por: TORA's | <p style={{color:"green"}}>Em estoque</p></p>
        <p className="product-shipping">Frete grátis<p style={{color:"grey", fontSize:20}}> - Consulte disponibilidade de seu CEP</p></p>
        <p className="product-price">DE: R$15.554,44</p>
        <p className="product-price">POR: <p style={{color:"blue", fontSize:80, marginLeft:30}}>R$13.299,44</p> <a href="/comprar"><button class="button-50" role="button">Comprar</button></a></p>
        <p className="product-discount">À vista no PIX com até 10% OFF</p>
        <p className="product-payment">Em até 10x de R$1.399,90 sem juros no cartão</p>
        <p className="product-payment">Ou em 1x no cartão com até 30% OFF</p>
        
      </div>
      </div>
      <div>
        <h2 style={{padding:30, fontSize:40}}>Detalhe do Produto</h2>
        <p style={{padding:30}}>aaaaaaaaaaaaaaaaaaaaaaaaa</p>
        <h2 style={{padding:30, fontSize:40}}>Ficha Técnica</h2>
        <p style={{padding:30}}>aaaaaaaaaaaaaaaaaaaaaaaaa</p>
      </div>
      </main>
      <Footer/>
    </div>
  );
}
