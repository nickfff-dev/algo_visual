import React from "react"
import { useDispatch } from "react-redux"
import { useCallback } from "react"
import { generateArray } from "./generateArray"
import { useSelector } from "react-redux"
import { setStatus, resetStats, setRunning } from "@/redux/reducers/sortersSlice"
import { SelectionSort, BubbleSort } from "@/utils/algoclass"

export default function StartControl() {
  const dispatch = useDispatch();

  const isRunning = useSelector((state) => state.sorting.running);
  React.useEffect(() => {
    if (isRunning) {
        BubbleSort();
    }
  }, [isRunning]);
  const handleStart = useCallback(() => {

    if (isRunning) return;
    dispatch(resetStats());
    dispatch(setRunning(true));
  }, [dispatch]);

  const handleStop = useCallback(() => {
    if (!isRunning) return;
    dispatch(setRunning(false));
    dispatch(resetStats());
    }, [dispatch]);
    return(
<button
onClick={isRunning ? handleStop : handleStart}
  className="align-middle lg:text-lg text-sm select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none lg:py-3 py-1.5 px-8 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
  type="button"
>
{
    isRunning ? "Stop" : "Start"
}
</button>
    )
}