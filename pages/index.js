import { Ubuntu_Mono} from 'next/font/google'
import dynamic from "next/dynamic";
import Visualiser from '@/components/Visualiser';



const mono = Ubuntu_Mono({subsets: ['latin'], weight: ['400', '700']})
const ApexChart = dynamic(() => import('@/components/Chart'), { ssr: false });


export default function Home() {
 

  return (   
    <main
      className={`${mono.className} `}
    >
      < Visualiser />
    </main>
  );
}
