import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

import store from '~/store';

function RouteWrapper({
  component: Component,
  isPrivate = false,
  t,
  i18n,
  ...rest
}) {
  const signed = store.getState().auth.signed;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} t={t} i18n={i18n} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  t: PropTypes.func.isRequired,
  i18n: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default withTranslation()(RouteWrapper);
