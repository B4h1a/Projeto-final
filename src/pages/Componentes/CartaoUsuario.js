import React from "react";
import '../../styles/usuarios.css';

export default function CartaoUsuario({ usuario, onEdit, onDelete }) {
  return (
    <div className="user-info-usuarios">
      <div className="user-avatar-usuarios">
        <div className="avatar-icon-usuarios">Foto Né</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-between",padding:10}}>
        <div style={{ fontSize: "1.2rem" }} className="user-details-usuarios">
          <h2>Nome de Usuário: {usuario.nome}</h2>
          <p>Email: {usuario.email}</p>
          <p>CPF: {usuario.cpf}</p>
        </div>


      </div>

      <div className="actions-usuarios">
        <button className="button-55" role="button" onClick={() => onEdit(usuario.id)}>Editar</button>
        <button className="button-55" role="button" onClick={() => onDelete(usuario.id)}>Excluir</button>
      </div>
    </div>
  );
}
