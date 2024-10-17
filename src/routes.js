import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Autenticacao from "./pages/Autenticacao";
import Home from "./pages/Home";
import DetalhesProduto from "./pages/DetalhesProduto";
import Carrinho from "./pages/Carrinho";
import HistoricoCompras from "./pages/HistoricoCompras";
import Perfil from "./pages/Perfil";
import Produtos from "./pages/Produtos";
import Vendas from "./pages/Vendas";
import Usuarios from "./pages/Usuarios";
import DetalhesVenda from "./pages/DetalhesVendas";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/autenticacao" element={<Autenticacao />} />
        <Route path="/produto/:id" element={<DetalhesProduto />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/historico-compras" element={<HistoricoCompras />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/produto" element={<Produtos />} />
        <Route path="/admin/vendas" element={<Vendas />} />
        <Route path="/admin/vendas/:id" element={<DetalhesVenda />} />
        <Route path="/admin/usuarios" element={<Usuarios />} />
      </Routes>
    </Router>
  );
}
