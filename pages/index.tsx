import { GlobalStyle } from '../styles/globals';
import { Main, Container, InvoiceList } from '../styles';
import { Sidebar, Header, Placeholder, Invoice } from '../components';

export default function Home() {
  return (
    <>
      <Sidebar />
      <Main>
        <Container>
          <Header />
          {/* <Placeholder /> */}
          <InvoiceList>
            <li>
              <Invoice url='/invoice/1' status='paid' />
            </li>
            <li>
              <Invoice url='/invoice/2' status='pending' />
            </li>
            <li>
              <Invoice url='/invoice/3' status='draft' />
            </li>
          </InvoiceList>
        </Container>
      </Main>
      <GlobalStyle />
    </>
  );
}
