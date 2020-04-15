import React, { useState } from 'react';
import { toast } from 'react-toastify';
import firebase from '../../config/firebase';
import 'firebase/auth';
import './style.css';

function UsuarioRecuperarSenha() {

  const [email, setEmail] = useState();

  function recuperarSenha() {
    firebase.auth().sendPasswordResetEmail(email).then(resultado => {
      toast.success(`Enviamos um link para seu email ${email} para que você redefina sua senha !`);
    }).catch(erro => {
      toast.error(`Erro`);
    });
  };

  return (
    <div className="form-cadastro" >
      <form >
        <h3><i class="fa fa-envelope"></i> Recuperar Senha</h3>
        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Email" />

        <button onClick={recuperarSenha} type="button" className="btn-enviar">Recuperar Senha</button>
      </form>
    </div>
  );
}

export default UsuarioRecuperarSenha;