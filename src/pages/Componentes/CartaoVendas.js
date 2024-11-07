import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Navegação entre páginas
import api from "../../services/api"; // API para fazer as requisições
import { AuthContext } from "../../contexts/AuthContext"; // Para acessar o contexto de autenticação
import '../../styles/vendas.css'; // Estilo do componente

export default function VendasCard({ vendas }) {
  const { user } = useContext(AuthContext); // Pega o usuário logado
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(""); // Estado de erro
  const navigate = useNavigate(); // Usar para navegação

  // Hook useEffect para carregar as vendas
  useEffect(() => {
    if (user && user.token) {
      setLoading(false);
    } else {
      setError("Usuário não autenticado.");
    }
  }, [user]);

  if (loading) {
    return <p>Carregando vendas...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container-vendas">
      {vendas.length > 0 ? (
        vendas.map((venda) => (
          <div key={venda.id} className="clearfix-vendas">
            <div className="left-section-vendas">
              <img src="https://via.placeholder.com/150" alt="Produto" />
              <div className="order-info">
                <p><strong>Produto:</strong> {venda.produto.nome}</p>
                <p><strong>Preço Total:</strong> R$ {venda.total}</p>
              </div>
            </div>
            <div className="right-section-vendas">
              <div className="status-vendas">
                {/* Status do pedido */}
                <span className="green">Pedido Concluído</span>
                <span className="red">Pedido Cancelado</span>
                <span className="yellow">Pedido Enviado</span>
              </div>
              <div className="details-vendas">
                <div className="section-vendas">
                  <h3>Informações do pedido</h3>
                  <p><strong>Data:</strong> {new Date(venda.data).toLocaleDateString()}</p>
                  <p><strong>Produto:</strong> {venda.produto.nome}</p>
                </div>
                <br />
                <div className="section-vendas">
                  <h3>Informações de envio</h3>
                  <p><strong>Endereço:</strong> {venda.endereco}</p>
                  <p><strong>CEP:</strong> {venda.cep}</p>
                </div>
              </div>
              <button
                className="detailsButton"
                onClick={() => navigate(`/admin/vendas/${venda.id}`)} // Navega para os detalhes da venda
              >
                Ver Detalhes
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Nenhuma venda encontrada.</p>
      )}
    </div>
  );
}
