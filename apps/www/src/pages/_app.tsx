import type { AppProps } from "next/app";
import { IoProvider } from "socket.io-react-hook";
import { globalStyles } from "@/css/global";

export default function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <IoProvider>
      <Component {...pageProps} />
    </IoProvider>
  );
}
