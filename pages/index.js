import { Ubuntu_Mono} from 'next/font/google'
import dynamic from "next/dynamic";
import Visualiser from '@/components/Visualiser';
import { generateArray } from '@/components/generateArray';
import { useEffect } from 'react';
import { store } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setRunning, resetStats, setBarWidth } from '@/redux/reducers/sortersSlice';

const mono = Ubuntu_Mono({subsets: ['latin'], weight: ['400', '700']})



export default function Home() {
  const dispatch = useDispatch();
  const algorithmId = useSelector((state) => state.page.algorithmId);
  const arrayCount = useSelector((state) => state.sorting.arrayCount);
  useEffect(() => {
    dispatch(setRunning(false));
    dispatch(resetStats());
    if (algorithmId){
      console.log(algorithmId);
        generateArray(arrayCount);
    }
  });
  return (   
    <div
      className={`${mono.className} mx-auto`}
    >
      < Visualiser />
    </div>
  );
}
