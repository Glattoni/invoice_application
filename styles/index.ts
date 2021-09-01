import styled from 'styled-components';
import { between, Breakpoints, up } from '../constants/breakpoints';

export const Main = styled.main`
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.base};
  background-color: ${({ theme }) => theme.colors.alabaster};
`;

export const Container = styled.div`
  width: 87vw;
  max-width: 730px;
  margin: 0 auto;
  padding-top: 4.5rem;

  ${between(Breakpoints.LG, Breakpoints.XL)} {
    padding-top: 5rem;
  }
`;
