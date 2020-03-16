import styled from 'styled-components';
import { colors } from '~/styles/styles';

export const Wrapper = styled.div`
  height: 100vh;
  background: linear-gradient(
    -90deg,
    ${colors.primary.main},
    ${colors.primary.variant}
  );
`;
