import React from "react";
import { Layout } from "../components/";

import "tailwindcss/tailwind.css";
import "../styles/global.scss";
import "react-multi-carousel/lib/styles.css";


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
