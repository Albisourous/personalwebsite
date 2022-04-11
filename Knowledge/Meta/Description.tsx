import Head from "next/head";
import { FC, memo } from "react";

const Description: FC<{ children: string }> = ({ children }) => {
  return (
    <Head>
      <meta name="description" content={children} />
      <meta name="og:description" content={children} />
    </Head>
  );
};

export default memo(Description);
