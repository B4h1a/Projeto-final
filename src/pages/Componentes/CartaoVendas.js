import React from "react";
import '../../styles/vendas.css'


export default function VendasCard() {
    return (
        <div>
            <div className="container-vendas">

                <div className="clearfix-vendas">
                    <div className="left-section-vendas">
                        <img src="https://via.placeholder.com/150" alt="Icon" />
                        <div className="order-info">
                            <p>Produto: Mouse Pad 35cm</p>
                            <p>Preço Total: R$ 125,21</p>
                        </div>
                    </div>
                    <div className="right-section-vendas">
                        <div className="status-vendas">
                            <span className="green">Pedido Concluído</span>
                            <span className="red">Pedido Cancelado</span>
                            <span className="yellow">Pedido Enviado</span>
                        </div>
                        <div className="details-vendas">
                            <div className="section-vendas">
                                <h3>Informações do pedido</h3>
                                <p>Data: 10/10/2024</p>
                                <p>Produto: Mouse Pad</p>
                            </div>
                            <br/>
                            <div className="section-vendas">
                                <h3>Informações de envio</h3>
                                <p>Endereço: Rua Fictícia, 123</p>
                                <p>CEP: 12345-678</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
