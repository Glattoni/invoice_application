import { GlobalStyle } from '../styles/globals';
import { Main, Container } from '../styles';
import { Sidebar, Header, Placeholder } from '../components';

export default function Home() {
  return (
    <>
      <Sidebar />
      <Main>
        <Container>
          <Header />
          <Placeholder />
        </Container>
      </Main>
      <GlobalStyle />
    </>
  );
}
