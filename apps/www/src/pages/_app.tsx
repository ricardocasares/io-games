import Head from "next/head";
import type { AppProps } from "next/app";
import { IoProvider } from "socket.io-react-hook";
import { globalStyles } from "@/css/global";

export default function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <IoProvider>
      <Head>
        <title>IO Games</title>
      </Head>
      <Component {...pageProps} />
    </IoProvider>
  );
}
