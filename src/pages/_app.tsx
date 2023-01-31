import { defaultTheme } from '@/styles/theme/default';
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import {GlobalStyle} from '../styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
