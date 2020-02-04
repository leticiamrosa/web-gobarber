import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignUp({ t }) {
  return (
    <>
      <img src={logo} alt="" />

      <form>
        <input placeholder={t('Nome completo')} />
        <input type="email" placeholder={t('Seu e-mail')} />
        <input type="password" placeholder={t('Sua senha secreta')} />
        <button type="submit">{t('Criar conta')}</button>
        <Link to="/">{t('Já tenho login')}</Link>
      </form>
    </>
  );
}
SignUp.propTypes = {
  t: PropTypes.func.isRequired,
};
