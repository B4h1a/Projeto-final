import React, { useState } from 'react';
import '../../styles/produto.css'




export default function Cartao({produto}){

    return(
      <div className="cartao">
      <div className="ft-cartao">
        <img style={{ width: 280 }} src={produto.imagens[0]} alt={produto.nome} />
        <h1 style={{fontSize:35}}>{produto.nome}</h1>
      </div>
      <div>
      <p style={{color:'white',fontSize:20,fontWeight:'bold'}}>R${produto.preco.toFixed(2)}</p>
      <a href={`/produto/${produto.id}`}><button className="button-55" role="button">Comprar</button></a>
      </div>

    </div>
    )
}