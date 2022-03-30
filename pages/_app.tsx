import type { AppProps } from "next/app";
import Head from "next/head";
import { Title, Description } from "../components/Meta";
import Layout from "../components/Layout";

// Styles
import "../styles/index.scss";

// App is const so I cannot reassign it to another thing
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Head>
        <title>Albin Shrestha's Website</title>
      </Head>
      <Title>Albin Shrestha</Title>
      <Description>
        Albin Shrestha is a Professional Freelancer and Software Engineer.
      </Description>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default App;
