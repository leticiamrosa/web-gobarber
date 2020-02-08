import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignIn({ t }) {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder={t('Seu e-mail')} />
        <Input
          name="password"
          type="password"
          placeholder={t('Sua senha secreta')}
        />
        <button type="submit">{t('Acessar')}</button>
        <Link to="/register">{t('Criar conta gratuita')}</Link>
      </Form>
    </>
  );
}
SignIn.propTypes = {
  t: PropTypes.func.isRequired,
};
