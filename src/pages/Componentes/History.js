import React from "react";
import '../../styles/perfil.css';

export default function CartaoHistorico() {
    return (

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
                        <a href="/produto/1"><button class="button-50" role="button">Ver Mais</button></a>
                    </div>
                </div>
            </div>

    )
}