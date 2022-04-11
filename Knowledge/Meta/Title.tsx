import Head from "next/head";
import { FC, memo } from "react";

const Title: FC<{ children: string }> = ({ children }) => {
  return (
    <Head>
      <meta property="og:title" content={children} />
      <title>{children}</title>
    </Head>
  );
};

export default memo(Title);
