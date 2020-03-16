import styled from 'styled-components';
import { colors } from '~/styles/styles';

export const Container = styled.div`
  background: ${colors.white};
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid ${colors.grey300};
    }

    a {
      font-weight: bold;
      color: ${colors.primary.main};
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid ${colors.grey300};

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: ${colors.grey500};
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: ${colors.grey400};
    }
  }

  img {
    height: 32px;
    border-radius: 50%;
  }
`;
