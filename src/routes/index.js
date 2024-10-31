import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes"
import Home from "../pages/Home";
import Autenticacao from "../pages/Autenticacao";
import DetalhesProduto from "../pages/DetalhesProduto";
import Produtos from "../pages/Produtos";
import FinalizarCompra from "../pages/FinalizarCompra";
import Carrinho from "../pages/Carrinho";
import Perfil from "../pages/Perfil";
import HistoricoCompras from "../pages/HistoricoCompras";
import Vendas from "../pages/Vendas";
import DetalhesVenda from "../pages/DetalhesVendas";
import Usuarios from "../pages/Usuarios";


export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/autenticacao" element={<Autenticacao />} />
        <Route path="/produto/:id" element={<DetalhesProduto />} />
        <Route path="/produto" element={<Produtos />} />
        <Route path="/finalizar-compra" element={<FinalizarCompra/>}/>

        {/* Rotas protegidas (apenas usuários logados) */}
        <Route element={<PrivateRoutes />}>
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/historico-compras" element={<HistoricoCompras />} />
        </Route>

        {/* Rotas protegidas de admin (apenas administradores) */}
        <Route element={<AdminRoutes />}>
        <Route path="/admin/vendas" element={<Vendas />} />
        <Route path="/admin/vendas/:id" element={<DetalhesVenda />} />
        <Route path="/admin/usuarios" element={<Usuarios />} />
        </Route>
      </Routes>
    </Router>
  );
}
