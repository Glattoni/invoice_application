import styled from 'styled-components';

export const Main = styled.main`
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.base};
  background-color: ${({ theme }) => theme.colors.alabaster};
`;

export const Container = styled.div`
  width: 87vw;
  max-width: 730px;
  margin: 0 auto;
  margin-top: 5rem;
`;
