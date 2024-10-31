import React, { useState, useEffect, useContext } from "react";
import "../styles/home.css";
import img from "../assets/images/Fundo-escrito.png";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import api from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [categorias, setCategorias] = useState({});

  // Fetch de produtos e agrupamento por categorias
  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await api.get('/categorias');
        console.log(response);
        
        setCategorias(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.response?.data?.message || "Erro desconhecido. Por favor, tente novamente.");
        setLoading(false);
      }
    };
    fetchProdutos();
  },[]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideTime = 5;
  const [timeLeft, setTimeLeft] = useState(slideTime);
  const images = [
    "https://www.aorus.com/image/banner/OLED_Winners%20Never%20Settle-1711676595.jpg",
    "https://www.aorus.com/image/banner/Z790_X%20Gen%20Designed%20for%2014th%20Gen-1710395783.jpg",
    "https://www.aorus.com/image/banner/AMD_X870%20AI%20Performance%20Infinite%20Power-1725587600.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          return slideTime;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="inicio">
      <Header />
      <div className="carousel">
        <div className="container">
          <div className="featured-wrapper">
            <ul className="featured-list">
              {images.map((image, index) => (
                <li key={index} style={{ opacity: currentIndex === index ? 1 : 0 }}>
                  <figure>
                    <img className="banner" src={image} alt="" />
                  </figure>
                  <div className="timer" style={{ height: `${(timeLeft / slideTime) * 100}%` }}></div>
                </li>
              ))}
            </ul>
            <ul className="dots">
              {images.map((_, index) => (
                <li key={index}>
                  <label
                    onClick={() => handleDotClick(index)}
                    className={currentIndex === index ? "selected" : ""}
                  ></label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="linhaP">
        <h1>Linha de Produtos</h1>
        <p className="text-home">
          A BITZONE é uma empresa líder em placas-mãe de alto desempenho, placas gráficas,
          laptops, hardware para jogos e sistemas. Somos apaixonados por nos juntarmos aos
          jogadores para desafiar os limites sem medo e lutar enquanto subimos para a glória final!
        </p>
      </div>

      {/* <div className="produto">
        {loading ? (
          <div>Carregando produtos...</div>
        ) : error ? (
          <p className="errorMessage">{error}</p>
        ) : (
          categorias.map((categoria) => (
            <div key={categoria}>
              <h2>{categoria}</h2>
              <div className="categoriaProdutos">
                {categorias[categoria].map((produto) => (
                  <div key={produto.id} className="produtoCard" onClick={() => navigate('/produtos/${categoria.id}')}>
                    <img src={produto.imagens[0]} alt={produto.nome} />
                    <h3>{produto.nome}</h3>
                    <p>{produto.descricao}</p>
                    <p>Por: R${produto.preco}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div> */}


      <div className="gtx">
        <img className="rtx" src={img} alt="GTX" />
        <div className="texto-gtx">
          <p className="text-ft">CADASTRE-SE NO NOSSO SITE</p>
          <div style={{ display: 'flex', gap: 25, justifyContent: 'center' }}>
            <a href="/autenticacao" class="btn btn-1">
              <svg>
                <rect x="0" y="0" fill="none" width="100%"
                  height="100%" />
              </svg>
              Cadastre-se
            </a>
            <a href="/autenticacao" class="btn btn-1">
              <svg>
                <rect x="0" y="0" fill="none" width="100%"
                  height="100%" />
              </svg>
              Entrar
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
