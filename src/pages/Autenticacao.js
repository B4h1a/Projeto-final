import React, { useState } from "react";
import '../styles/autenticacao.css';

export default function Autenticacao() {
  const [bodyClass, setBodyClass] = useState("");

  const handleSignIn = () => {
    setBodyClass("sign-in-js");
  };

  const handleSignUp = () => {
    setBodyClass("sign-up-js");
  };

  // Atualiza a classe do body quando o componente é montado
  React.useEffect(() => {
    document.body.className = bodyClass;

    // Limpa a classe quando o componente é desmontado
    return () => {
      document.body.className = "";
    };
  }, [bodyClass]);

  return (
    <div className="container-autenticacao">
      <div className="extra-menu-voltar">
          <a href="/" className="my-tora">
            Voltar
          </a>
        </div>
      <div className="content first-content">
        <div className="first-column">
          <h2 className="title title-primary">Bem-Vindo de Volta!</h2>
          <p className="description description-primary">Para se manter conectado conosco</p>
          <p className="description description-primary">por favor faça login com suas informações pessoais</p>
          <button onClick={handleSignIn} className="btn-login btn-primary">logar</button>
        </div>
        <div className="second-column">
          <h2 className="title title-second">Crie sua Conta</h2>
          <br/>
          <form className="form">
            <label className="label-input">
              <i className="far fa-user icon-modify"></i>
              <input type="text" placeholder="Nome" />
            </label>
            <label className="label-input">
              <i className="far fa-user icon-modify"></i>
              <input type="email" placeholder="Email" />
            </label>
            <label className="label-input">
              <i className="far fa-user icon-modify"></i>
              <input type="text" placeholder="Telefone" />
            </label>
            <label className="label-input">
              <i className="far fa-envelope icon-modify"></i>
              <input type="text" placeholder="CPF" />
            </label>
            <label className="label-input">
              <i className="far fa-envelope icon-modify"></i>
              <input type="text" placeholder="CEP" />
            </label>
            <label className="label-input">
              <i className="far fa-envelope icon-modify"></i>
              <input type="text" placeholder="Cidade" />
            </label>
            <label className="label-input">
              <i className="far fa-envelope icon-modify"></i>
              <input type="text" placeholder="Bairro" />
            </label>
            <label className="label-input">
              <i className="far fa-envelope icon-modify"></i>
              <input type="text" placeholder="Logradouro" />
            </label>
            <label className="label-input">
              <i className="far fa-envelope icon-modify"></i>
              <input type="text" placeholder="Complemento" />
            </label>
            <label className="label-input">
              <i className="far fa-envelope icon-modify"></i>
              <input type="text" placeholder="Numero" />
            </label>
            <div className="center-senha">
            <label className="label-input">
              <i className="fas fa-lock icon-modify"></i>
              <input type="password" placeholder="Password" />
            </label>
            <button className="btn-login btn-second">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
      <div className="content second-content">
        <div className="first-column">
          <h2 className="title title-primary">Olá, Amigo!</h2>
          <p className="description description-primary">Insira seus dados pessoais</p>
          <p className="description description-primary">e comece sua jornada conosco</p>
          <button onClick={handleSignUp} className="btn-login btn-primary">cadastrar</button>
        </div>
        <div className="second-column">
          <h2 className="title title-second">Faça login</h2>
          <br/>
          <br/>
          <br/>


          <form className="form">
            <label className="label-input">
              <i className="far fa-envelope icon-modify"></i>
              <input type="email" placeholder="Email" />
            </label>
            <label className="label-input">
              <i className="fas fa-lock icon-modify"></i>
              <input type="password" placeholder="Password" />
            </label>
            <button className="btn-login btn-tercery">logar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
