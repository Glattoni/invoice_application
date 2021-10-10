import type { AppProps } from 'next/app';
import { InvoicesProvider } from '../context/invoices_context';
import { ThemeProvider } from '../context/theme_context';
import { Theme } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <InvoicesProvider>
      <ThemeProvider>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </ThemeProvider>
    </InvoicesProvider>
  );
}
export default MyApp;
