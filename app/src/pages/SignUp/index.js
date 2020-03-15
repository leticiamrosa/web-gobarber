import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('Insira um e-mail válido').required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
})

export default function SignUp({ t }) {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password} ) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder={t('Nome completo')} />
        <Input name="email"type="email" placeholder={t('Seu e-mail')} />
        <Input name="password" type="password" placeholder={t('Sua senha secreta')} />
        <button type="submit">{t('Criar conta')}</button>
        <Link to="/">{t('Já tenho login')}</Link>
      </Form>
    </>
  );
}
SignUp.propTypes = {
  t: PropTypes.func.isRequired,
};

