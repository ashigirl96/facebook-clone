import "../styles/globals.css";
import { Provider } from "next-auth/client";
import React from "react";
import { AppProps } from "next/app";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Provider session={pageProps.session}>
    <Component {...pageProps} />
  </Provider>
);

export default App;
