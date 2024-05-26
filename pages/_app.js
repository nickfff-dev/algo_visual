import "@/styles/globals.css";
import { store} from "@/redux/store";
import { Provider } from "react-redux";
import { Ubuntu_Mono} from 'next/font/google'


const mono = Ubuntu_Mono({subsets: ['latin'], weight: ['400', '700']})
export default function App({ Component, pageProps }) {
  return (
   
  <main className={mono.className}>
    <Provider store={store}>
  <Component {...pageProps} />
  </Provider>
</main>

);
}
