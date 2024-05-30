import { Ubuntu_Mono} from 'next/font/google'
import dynamic from "next/dynamic";
import Visualiser from '@/components/Visualiser';
import { generateArray } from '@/components/generateArray';
import { SelectionSort, BubbleSort } from "@/utils/algoclass";
import { useEffect } from 'react';
import { store } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setRunning, resetStats, setBarWidth } from '@/redux/reducers/sortersSlice';

const mono = Ubuntu_Mono({subsets: ['latin'], weight: ['400', '700']})



export default function Home() {
  useEffect(() => {
    SelectionSort();
  });



  return (   
    <div
      className={`${mono.className} mx-auto`}
    >
      < Visualiser />
    </div>
  );
}
