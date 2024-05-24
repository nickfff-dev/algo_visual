import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { Ubuntu_Mono} from 'next/font/google'

const mono = Ubuntu_Mono({subsets: ['latin'], weight: ['400', '700']})
export default function App({ Component, pageProps }) {
  return (
  <main className={mono.className}>
  <Component {...pageProps} />
</main>
);
}
