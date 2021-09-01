import { GlobalStyle } from '../styles/globals';
import { Main, Container } from '../styles';
import { Sidebar, FilterByStatus, Button } from '../components';

export default function Home() {
  return (
    <>
      <Sidebar />
      <Main>
        <Container></Container>
      </Main>
      <GlobalStyle />
    </>
  );
}
