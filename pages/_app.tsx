import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeStore } from '../contexts/global_theme/ThemeStore';
import { Theme } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeStore>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </ThemeStore>
  );
}
export default MyApp;
