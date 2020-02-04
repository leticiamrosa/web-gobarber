import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignIn({ t }) {
  return (
    <>
      <img src={logo} alt="" />

      <form>
        <input type="email" placeholder={t('Seu e-mail')} />
        <input type="password" placeholder={t('Sua senha secreta')} />
        <button type="submit">{t('Acessar')}</button>
        <Link to="/register">{t('Criar conta gratuita')}</Link>
      </form>
    </>
  );
}
SignIn.propTypes = {
  t: PropTypes.func.isRequired,
};
