import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Navegação entre páginas
import api from "../services/api"; // API para fazer as requisições
import { AuthContext } from "../contexts/AuthContext"; // Para acessar o contexto de autenticação
import '../styles/vendas.css'; // Estilo do componente
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import VendasCard from "./Componentes/CartaoVendas";

export default function Vendas() {
  const { user } = useContext(AuthContext); // Pega o usuário logado
  const [vendas, setVendas] = useState([]); // Armazena as vendas
  const [loading, setLoading] = useState(true); // Estado para controle de carregamento
  const [error, setError] = useState(""); // Estado para erros
  const navigate = useNavigate(); // Usar para navegação

  
  useEffect(() => {
    const fetchVendas = async () => {
      try {
        const response = await api.get("/vendas", {
          headers: { Authorization: `Bearer ${user.token}` },
        });
  console.log("vendas",response.data);

        setVendas(response.data); // Armazena os dados das vendas
        setLoading(false); // Atualiza estado de carregamento
      } catch (error) {
        setLoading(false);
        setError(error.response?.data?.message || "Erro desconhecido. Tente novamente.");
      }
    };

    if (user.token) {
      fetchVendas(); // Só chama a API se o token estiver presente
    }
  }, [user.token]);

  if (loading) {
    return <p>Carregando vendas...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1, marginTop: 60, backgroundColor: "black" }}>
        <h1 style={{ textAlign: "center", color: "white" }}>Vendas Realizadas</h1>
        <div>
          
        </div>
      </main>
      <Footer />
    </div>
  );
}
