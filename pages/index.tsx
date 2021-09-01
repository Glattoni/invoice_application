import { GlobalStyle } from '../styles/globals';
import { Main, Container } from '../styles';
import { Sidebar, Header } from '../components';

export default function Home() {
  return (
    <>
      <Sidebar />
      <Main>
        <Container>
          <Header />
        </Container>
      </Main>
      <GlobalStyle />
    </>
  );
}
