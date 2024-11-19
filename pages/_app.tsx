import "@/styles/globals.css";
import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import CustomCursor from '../components/CustomCursor';
config.autoAddCss = false

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <CustomCursor />
    <div className="main-content">
      <Component {...pageProps} />
    </div>
    </ >
  );
}
