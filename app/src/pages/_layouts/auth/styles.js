import styled from 'styled-components';
import { colors } from '~/styles/styles';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100vh;
  background: linear-gradient(
    -90deg,
    ${colors.primary.main},
    ${colors.primary.variant}
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      height: 44px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: ${colors.error};
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: 600;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px 0 0;
      height: 44px;
      background: ${colors.secondary.main};
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      color: #fff;
      transition: background 0.2;

      &:hover {
        background: ${darken(0.03, colors.secondary.main)};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
