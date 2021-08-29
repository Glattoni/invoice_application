import type { AppProps } from 'next/app';
import { ThemeStore } from '../contexts/themeContext/ThemeStore';
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
