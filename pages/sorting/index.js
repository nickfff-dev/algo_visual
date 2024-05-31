
import Visualiser from '@/components/Visualiser';
import { generateArray } from '@/components/generateArray';
import { SelectionSort} from "@/utils/algoclass";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRunning} from '@/redux/reducers/sortersSlice';



export default function SortingContainer() {
  const dispatch = useDispatch();
  const maxBarWidth = useSelector((state) => state.sorting.maxBarWidth);

  useEffect(() => {
   dispatch(setRunning(true));
    generateArray(200);
    SelectionSort();
  }, [ dispatch ]);



  return (   
    <div className=""
    >
      < Visualiser />
    </div>
  );
}