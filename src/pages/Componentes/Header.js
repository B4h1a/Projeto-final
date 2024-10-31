import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import '../../styles/home.css';

const Header = () => {
    const { user, logout } = useContext(AuthContext); // Pega o usuário logado e a função logout
    const [activeMenu, setActiveMenu] = useState(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // Controle do menu mobile
    const navigate = useNavigate();

    const handleMenuClick = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const handleLogout = () => {
        logout(); // Desloga o usuário
        navigate("/autenticacao"); // Redireciona para a página de autenticação
    };

    return (
        <header className="header">
            <div className="logo">
                <a href="/">BITZONE</a>
            </div>
            <div 
                className="mobile-menu-icon" 
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
                ☰
            </div>

            <nav className={`navbar ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="menu">
                    {/* Link para Produtos com submenu */}
                    <li className="menu-item" onClick={() => handleMenuClick("produtos")}>
                        Produtos
                        {activeMenu === "produtos" && (
                            <div className="dropdown">
                                <div className="submenu-container">
                                    <Link to="/produto/:id">Placa Mãe</Link>
                                    <Link to="/produto/:id">Placas de Vídeo</Link>
                                    <Link to="/produto/:id">Computador</Link>
                                    <Link to="/produto/:id">Monitor</Link>
                                </div>
                            </div>
                        )}
                    </li>

                    {/* Exibir "Carrinho", "Perfil" e "Histórico" apenas para usuários logados */}
                    {user && (
                        <>
                            <li className="menu-item">
                                <Link to="/perfil">Meu Perfil</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/historico-compras">Histórico</Link>
                            </li>
                        </>
                    )}

                    {/* Links visíveis apenas para Admin */}
                    {user && user.role === "ADMIN" && (
                        <>
                            <li className="menu-item">
                                <Link to="/admin/vendas">Vendas</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/admin/usuarios">Gerenciar Usuários</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/admin/produto">Adicionar Produto</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>

            <div className="extra-menu">
                {user ? (
                    <a href="/" className="my-aorus" onClick={handleLogout}>Deslogar</a>
                ) : (
                    <Link to="/autenticacao" className="my-aorus">Logar</Link>
                )}
            </div>
        </header>
    );
};

export default Header;
