import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { Provider } from "react-redux";
import { StylesProvider, createGenerateClassName } from '@mui/styles';
import { store } from "../src/redux/store";
import '@/components/Header/zetta-menu.css';
import '@/components/Footer/Footer.css';
import 'font-awesome/css/font-awesome.min.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});
export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <StylesProvider generateClassName={generateClassName}>
        <Head>
          <title>My page</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </StylesProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
