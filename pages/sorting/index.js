import { Ubuntu_Mono} from 'next/font/google'
import dynamic from "next/dynamic";
import Visualiser from '@/components/Visualiser';
import { generateArray } from '@/components/generateArray';
import { SelectionSort, BubbleSort } from "@/utils/algoclass";
import { useEffect } from 'react';
import { store } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setRunning, resetStats, setBarWidth } from '@/redux/reducers/sortersSlice';



export default function SortingContainer (){
    const dispatch = useDispatch();
  const maxBarWidth = useSelector((state) => state.sorting.maxBarWidth);
  

  useEffect(() => {
   dispatch(setRunning(true));
    generateArray(200);
    SelectionSort();
  }, []);



  return (   
    <div className=""
    >
      < Visualiser />
    </div>
  );
}