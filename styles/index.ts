import styled from 'styled-components';

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.alabaster};
  min-height: 100vh;
`;

export const Container = styled.div`
  width: 87vw;
  max-width: 730px;
  margin: 0 auto;
  margin-top: 5rem;
`;
