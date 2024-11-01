import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";
import '../../styles/vendas.css';


export default function VendasCard() {
  const { user } = useContext(AuthContext);
  const [vendas, setVendas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVendas = async () => {
      try {
        const response = await api.get("/vendas");
        setVendas(response.data);
        setLoading(false);
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
        } else {
          setError("Erro desconhecido. Por favor, tente novamente.");
        }
      }
    };

    fetchVendas();
  }, [user.token]);

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
              <img src="https://via.placeholder.com/150" alt="Icon" />
              <div className="order-info">
                <p><strong>Produto:</strong> {venda.produto.nome}</p>
                <p><strong>Preço Total:</strong> R$ {venda.total}</p>
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
                onClick={() => navigate(`/admin/vendas/${venda.id}`)}
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
