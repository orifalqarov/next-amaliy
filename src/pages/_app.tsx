import createEmotionCache from '@/helpers/create-emotion-cashe';
import theme from '@/helpers/theme';
import '@/styles/globals.css'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app'
import Head from 'next/head';


const clientSideEmotionCache = createEmotionCache();
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (<CacheProvider value={emotionCache}>
    <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
         <CssBaseline />
      <Component {...pageProps} />
      </ThemeProvider>
   
  </CacheProvider>)
}
