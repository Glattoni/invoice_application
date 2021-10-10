import { FC } from 'react';
import { GetStaticProps } from 'next';
import { Sidebar, Header, Placeholder, InvoiceCardLink } from '../components';
import { Invoice } from '../types';
import { GlobalStyle } from '../styles/globals';
import { Main, Container, InvoiceList } from '../styles';

type Props = {
  data: Invoice[];
};

export const Home: FC<Props> = ({ data }) => {
  return (
    <>
      <Sidebar />
      <Main>
        <Container>
          <Header />
          <InvoiceList>
            {data.map((invoice) => (
              <li key={invoice.id}>
                <InvoiceCardLink {...invoice} />
              </li>
            ))}
            {!data.length && <Placeholder />}
          </InvoiceList>
        </Container>
      </Main>
      <GlobalStyle />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch('http://localhost:3000/api/invoices');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};

export default Home;
