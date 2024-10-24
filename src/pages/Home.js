import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import img from '../assets/images/Fundo-escrito.png';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';


export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideTime = 5; // Tempo em segundos para cada slide
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
    setCurrentIndex(index); // atualiza o slide atual e seleciona o dot correspondente
  };


  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
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
            <div className='timer2'style={{ height: `${50}%` }}></div>
            <div className="timer" style={{ height: `${(timeLeft / slideTime) * 50}%` }}></div>
          </li>
        ))}
      </ul>

      <ul className="dots">
        {images.map((_, index) => (
          <li key={index}>
            <label
              onClick={() => handleDotClick(index)}
              className={currentIndex === index ? 'selected' : ''}
            ></label>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

      <div className="linhaP">
        <h1>Linha de Produtos</h1>
        <p>
          A TORAS é uma empresa líder em placas-mãe de alto desempenho, placas gráficas,<br></br>
          laptops, hardware para jogos e sistemas. Somos apaixonados por nos juntarmos aos<br></br>
          jogadores para desafiar os limites sem medo e lutar enquanto subimos para a glória final!
        </p>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="produto">
        <div className="nome">
          <a href="/produto/:id" class="btn-produto btn-1-produto">
            <div className="border-container">
              <svg>
                <rect x="0" y="0" fill="none" width="90%"
                  height="90%" />
              </svg>
              <img className="ftproduto" src="https://www.aorus.com/assets/img/Motherboard.6b87c3cf.png.webp" alt="placaMae" />
              Placa Mãe
            </div>
          </a>
        </div>
        <div className="nome">
          <a href="/produto/:id" class="btn-produto btn-1-produto">
            <div className="border-container">
              <svg >
                <rect x="0" y="0" fill="none" width="90%"
                  height="90%" />
              </svg>
              <img className="ftproduto" src="https://www.aorus.com/assets/img/Desktop-PC.d2a8d228.png.webp" alt="Computador" />
              Computador
            </div>
          </a>
        </div>
        <div className="nome">
          <a href="/produto/:id" class="btn-produto btn-1-produto">
            <div className="border-container">
              <svg >
                <rect x="0" y="0" fill="none" width="90%"
                  height="90%" />
              </svg>
              <img className="ftproduto" src="https://www.aorus.com/assets/img/Graphics.8b61a0c9.png.webp" alt="PlacaVideo" />
              Placa de Video
            </div>
          </a>
        </div>
        <div className="nome">
          <a href="/produto/:id" class="btn-produto btn-1-produto">
            <div className="border-container">
              <svg >
                <rect x="0" y="0" fill="none" width="90%"
                  height="90%" />
              </svg>
              <img className="ftproduto" src="https://www.aorus.com/assets/img/Monitor.2ec4422a.png.webp" alt="Monitor" />
              Monitor
            </div>
          </a>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

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
