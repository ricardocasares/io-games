import "../css/global.css";
import type { AppProps } from "next/app";
import { IoProvider } from "socket.io-react-hook";
import { NextUIProvider } from '@nextui-org/react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <IoProvider>
        <Component {...pageProps} />
      </IoProvider>
    </NextUIProvider>
  );
}
