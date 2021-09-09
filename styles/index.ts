import styled from 'styled-components';
import { up, between, Breakpoints } from '../constants/breakpoints';

export const Main = styled.main`
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.base};
  background-color: ${({ theme }) => theme.colors.alabaster};
`;

export const Container = styled.div`
  width: 87.5vw;
  max-width: 730px;
  margin: 0 auto;
  padding-top: 4.5rem;

  ${between(Breakpoints.LG, Breakpoints.XL)} {
    padding-top: 5rem;
  }
`;

export const InvoiceList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  ${up(Breakpoints.LG)} {
    margin-top: 3.5rem;
  }
`;
