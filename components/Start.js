import React from "react"
import { useDispatch } from "react-redux"
import { useCallback } from "react"
import { useSelector } from "react-redux"
import { setStatus, resetStats, setRunning } from "@/redux/reducers/sortersSlice"
import SortingAlgorithms from "./SortingAlgorithms"

export default function StartControl() {
  const dispatch = useDispatch();
  const algorithmId = useSelector((state) => state.page.algorithmId);
  const isRunning = useSelector((state) => state.sorting.running);
  const algStatus = useSelector((state) => state.sorting.status);
  // React.useEffect(() => {
  //   if (algStatus === "sorted") { 
  //     generateArray();
  //   };
  // }, [ algStatus]);
  const startAlgorithm = useCallback( async () => {
    dispatch(resetStats());
    dispatch(setRunning(true));
    if (algorithmId === "selectionSort") {
      await SortingAlgorithms.selectionSort();  
    };
    if (algorithmId === "bubbleSort") {
      await SortingAlgorithms.bubbleSort();
    };
    if (algorithmId === "quickSort") {
      await SortingAlgorithms.quickSort();
    };
    if (algorithmId === "mergeSort") {
      await SortingAlgorithms.mergeSort();
    };
    if (algorithmId === "insertionSort") {
      await SortingAlgorithms.insertionSort();
    };
    dispatch(setRunning(false));
    dispatch(setStatus("sorted"));
  }, [dispatch, algorithmId]);


  const handleStop = useCallback(() => {
    if (!isRunning) return;
    dispatch(setRunning(false));
    }, [dispatch, isRunning]);
    return(
<button
onClick={isRunning ? handleStop : startAlgorithm}
  className="align-middle lg:text-lg text-sm select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none lg:py-3 py-1.5 px-8 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
  type="button"
>
{
    isRunning ? "Stop" : "Start"
}
</button>
    )
}