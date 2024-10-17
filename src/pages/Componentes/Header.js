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
                    <a href="/produto/:id">Placa Mãe</a>
                    <a href="/produto/:id">Placas de Vídeo</a>
                    <a href="/produto/:id">Computador</a>
                    <a href="/produto/:id">Monitor</a>
                  </div>
                </div>
              )}
            </li>
            <li className="menu-item"><a className='a-hist' href="/perfil">Perfil</a></li>
 
            <li className="menu-item" ><a className='a-hist' href="/historico-compras">Histórico</a></li>
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