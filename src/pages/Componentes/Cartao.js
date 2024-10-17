import React, { useState } from 'react';
import '../../styles/produto.css'




export default function Cartao(){
    return(
        <div className="cartao">
        <div className="ft-cartao">
        <img style={{width:320}}  src="https://static.gigabyte.com/StaticFile/Image/Global/05d0303199648d6f786f1b50a9acfd83/ Product/41061/webp/400"/>
        <h1>Placa Mae</h1>
        <p>R$699,99</p>
        </div>
        <a href="/produto"><button class="button-55" role="button">Comprar</button></a>
      </div>
    )
}