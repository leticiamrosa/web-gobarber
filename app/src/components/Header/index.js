import React from 'react';
import { Link } from 'react-router-dom';
import Notifications from '~/components/Notifications';

import { Container, Content, Profile } from './index.styles';

import logo from '~/assets/logo_purple.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="goBarber" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Leticia Monteiro</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Leticia Monteiro"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
