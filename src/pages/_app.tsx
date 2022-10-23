import "../styles/main.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "../providers/theme";
import Theme from "../components/theme/Theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider defaultTheme="dark">
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </ThemeProvider>
    </>
  );
}
