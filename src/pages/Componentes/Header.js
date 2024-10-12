import React, { useState } from 'react';
import '../../styles/home.css'
const Header = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const handleMenuClick = (menu) => {
      setActiveMenu(activeMenu === menu ? null : menu);
    };

    return (
      <header className="header">
        <div className="logo">
          <a href="/">TORA'S</a>
        </div>
        <nav className="navbar">
          <ul className="menu">
            <li onClick={() => handleMenuClick("produtos")} className="menu-item">
              Produtos
              {activeMenu === "produtos" && (
                <div className="dropdown">
                  <div className="submenu-container">
                    <a href="/produto/1">Placa Mãe</a>
                    <a href="/produto/2">Placas de Vídeo</a>
                    <a href="/produto/3">Computador</a>
                    <a href="/produto/4">Monitor</a>
                  </div>
                </div>
              )}
            </li>
            <li onClick={() => handleMenuClick("explorar")} className="menu-item">
              Perfil
              {activeMenu === "explorar" && (
                <div className="dropdown">
                  <div className="submenu-container">
                    <a href="/">Eventos</a>
                    <a href="/">Notícias</a>
                  </div>
                </div>
              )}
            </li>
            <li className="menu-item">Histórico</li>
          </ul>
        </nav>
        <div className="extra-menu">
          <a href="/autenticacao" className="my-aorus">
            Logar
          </a>
        </div>
      </header>
    );
  };
  export default Header;