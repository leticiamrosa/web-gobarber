import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignIn({ t, i18n }) {
  console.log(t);
  console.log(i18n);
  i18n.changeLanguage('pt-BR');

  return (
    <>
      <img src={logo} alt="" />

      <form>
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />
        <button type="submit">{t('Sign-In')}</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}
