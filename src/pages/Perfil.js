import React, { useContext, useEffect, useState } from "react";
import api from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import CartaoHistorico from "./Componentes/History";
import '../styles/perfil.css';


export default function Perfil() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    password: "",
    cpf: "",
    cep: "",
    cidade: "",
    bairro: "",
    logradouro: "",
    complemento: "",
    numero: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [disabled, setDisabled] = useState(true);
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!user || loading) {
      return;
    }

    const fetchPerfil = async () => {
      try {
        const responsePerfil = await api.get("/perfil");
        setFormData({
          nome: responsePerfil.data.nome,
          email: responsePerfil.data.email,
          telefone: responsePerfil.data.telefone,
          password: "",
          cpf: responsePerfil.data.cpf,
          cep: responsePerfil.data.endereco.cep,
          cidade: responsePerfil.data.endereco.cidade,
          bairro: responsePerfil.data.endereco.bairro,
          logradouro: responsePerfil.data.endereco.logradouro,
          complemento: responsePerfil.data.endereco.complemento,
          numero: responsePerfil.data.endereco.numero,
        });
      } catch (error) {
        setError(
          error.response?.data?.message || "Erro desconhecido. Por favor, tente novamente."
        );
      }
    };

    fetchPerfil();
  }, [user, loading]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      await api.patch("/perfil/update", formData);
      setSuccessMessage("Perfil atualizado com sucesso!");
      setDisabled(true);
    } catch (error) {
      setError(
        error.response?.data?.message || "Erro desconhecido. Por favor, tente novamente."
      );
    }
  };

  const handleEdit = () => {
    setDisabled(false);
  };

  if (loading) {
    return <p>Carregando perfil...</p>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1, marginTop: 60, backgroundColor: "black" }}>
        <div className="container-profile">
          <div className="profile-image">
            Foto
          </div>

          <form onSubmit={handleSave}>
            <div className="input-group-profile">
              <h1 className="text-perfil">Nome</h1>
              <input
                className="input-perfil"
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                disabled={disabled}
              />
            </div>

            <div className="input-group-profile">
              <h1 className="text-perfil">Email</h1>
              <input
                className="input-perfil"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={disabled}
              />
            </div>

            <div className="input-group-profile">
              <h1 className="text-perfil">Telefone</h1>
              <input
                className="input-perfil"
                type="text"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                disabled={disabled}
              />
            </div>

            <div className="input-group-profile">
              <h1 className="text-perfil">CPF</h1>
              <input
                className="input-perfil"
                type="text"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                disabled={disabled}
              />
            </div>

            <div className="input-group-profile">
              <h1 className="text-perfil">Endereço Completo</h1>
              <input
                className="input-perfil"
                type="text"
                name="logradouro"
                value={formData.logradouro}
                onChange={handleChange}
                disabled={disabled}
                placeholder="Endereço Completo"
              />
            </div>

            {!disabled && (
              <button type="submit" className="saveButton">
                Salvar
              </button>
            )}
            {disabled && (
              <button type="button" className="editButton" onClick={handleEdit}>
                Editar Perfil
              </button>
            )}
          </form>
        </div>

        <h1 className="historico">Carrinho de Compras</h1>
        <div className="fica-historico">
          <CartaoHistorico />
          <CartaoHistorico />
          <CartaoHistorico />
          <CartaoHistorico />
        </div>
      </main>
      <Footer />
    </div>
  );
}
