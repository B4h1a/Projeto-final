import React from "react";
import '..//styles/finalizarcompra.css'
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";

export default function FinalizarCompra() {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1, marginTop: 60, backgroundColor: "black" }}>
        <div class="container-finalizar">
          <section style={{ marginBottom: 20, padding: 10, backgroundColor: "#222", display: "flex", flexDirection: 'row', justifyContent: "space-between" }} class="product-service-finalizar">
            <nav>
              <h1 style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>PRODUTO E SERVIÇO</h1>
              <div class="product-info-finalizar">
                <p style={{ display: 'flex', flexDirection: 'row', color: "white", fontSize: 20 }}>Vendido e entregue por:BITZONE</p>
                <p style={{ color: "white", fontSize: 20 }}>Produto que foi vendido: Breve descrição sobre ele ID - OP561FISOPUSISI</p>
              </div>
            </nav>

            <div class="resume-finalizar">
              <h2>RESUMO</h2>
              <p>Produto: Mouse Gamer XYZ</p>
              <p>Quantidade: 1</p>
              <p>Preço à vista: R$ 600,00</p>
              <p>Subtotal Serviço: R$ 0,00</p>
            </div>
          </section>


          <section style={{ marginBottom: 20, padding: 10, backgroundColor: "#222" }} classname="details-finalizar">
            <h2 style={{ color: 'white' }}>ENDEREÇO COMPLETO</h2>
            <div class="address-form-finalizar">
              <input style={{ display: "block", margin: 10, padding: 10, width: "calc(100% - 20px)", color: "white", backgroundColor: "#333" }} type="text" placeholder="CEP" />
              <input style={{ display: "block", margin: 10, padding: 10, width: "calc(100% - 20px)", color: "white", backgroundColor: "#333" }} type="text" placeholder="Identificação" />
              <input style={{ display: "block", margin: 10, padding: 10, width: "calc(100% - 20px)", color: "white", backgroundColor: "#333" }} type="text" placeholder="Logradouro" />
              <input style={{ display: "block", margin: 10, padding: 10, width: "calc(100% - 20px)", color: "white", backgroundColor: "#333" }} type="text" placeholder="Número" />
              <input style={{ display: "block", margin: 10, padding: 10, width: "calc(100% - 20px)", color: "white", backgroundColor: "#333" }} type="text" placeholder="Complemento" />
              <input style={{ display: "block", margin: 10, padding: 10, width: "calc(100% - 20px)", color: "white", backgroundColor: "#333" }} type="text" placeholder="Referência" />
              <input style={{ display: "block", margin: 10, padding: 10, width: "calc(100% - 20px)", color: "white", backgroundColor: "#333" }} type="text" placeholder="Bairro" />
              <input style={{ display: "block", margin: 10, padding: 10, width: "calc(100% - 20px)", color: "white", backgroundColor: "#333" }} type="text" placeholder="Cidade" />
              <input style={{ display: "block", margin: 10, padding: 10, width: "calc(100% - 20px)", color: "white", backgroundColor: "#333" }} type="text" placeholder="UF" />
              <a href="/"><button class="button-55" role="button">Concluir</button></a>
            </div>
          </section>

          <section style={{marginbottom:20, padding:10, backgroundcolor:'#222'}} className="payment-finalizar">
            <h2 style={{color:'white'}}>FORMA DE PAGAMENTO</h2>
            <div className="payment-options-finalizar">
              <label for="payment-method" style={{color:'white', marginright: 20,backgroundColor:"#222"}}>Escolha o método de pagamento:</label>
              <select id="payment-method" style={{padding:15}} className="select-payment-finalizar">
                <option value="pix">PIX</option>
                <option value="boleto">Boleto Bancário</option>
                <option value="credit-card">Cartão de Crédito</option>
              </select>
              <a href="/"><button style={{left:'-7%',marginBottom:10}} className="button-55" role="button">Concluir</button></a>
            </div>
          </section>

          <br/>
          <section style={{ marginBottom: 20, padding: 10, backgroundColor: "#222" }} class="order-info-finalizar">
            <h2 style={{ color: 'white' }}>INFORMAÇÕES DO SEU PEDIDO</h2>
            <p style={{ color: 'white' }}>Informações de entrega: Entrega entre 10:00 - 18:00</p>
            <p style={{ color: 'white' }}>Data de entrega estimada: 20/10/2024</p>
          </section>

          <div className="finalize-btn">
          <a href="/"><button class="button-55" role="button">Finalizar</button></a>
          <a href="/produto"><button class="button-55" role="button">Voltar</button></a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
