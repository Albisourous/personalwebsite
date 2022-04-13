import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

// Styles
import "../styles/index.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Head>
        <title>Albin Shrestha's Website</title>
      </Head>

      <ThemeProvider defaultTheme="dark" attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
};

export default App;
