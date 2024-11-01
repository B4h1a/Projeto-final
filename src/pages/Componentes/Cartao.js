import React, { useState } from 'react';
import '../../styles/produto.css'




export default function Cartao({produto}){

    return(
      <div className="cartao">
      <div className="ft-cartao">
        <img style={{ width: 320 }} src={produto.imagens[0]} alt={produto.nome} />
        <h1>{produto.nome}</h1>
        <p>R${produto.preco.toFixed(2)}</p>
      </div>
      <a href={`/produto/${produto.id}`}><button className="button-55" role="button">Comprar</button></a>
    </div>
    )
}