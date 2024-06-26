import { useDispatch, useSelector } from "react-redux"
import { useCallback, useEffect, useState } from "react"
import { setArrayCount, setRunning } from "@/redux/reducers/sortersSlice";
import { generateArray } from "./generateArray";

const  CountControl = () => {
    const dispatch = useDispatch();
    const arrayCount = useSelector((state) => state.sorting.arrayCount);
    const [maxW, setMaxW] = useState(null)
    const updateCount = useCallback((e) => {
        dispatch(setRunning(false));
        dispatch(setArrayCount(e.target.value));
        generateArray();
    }, [dispatch]);
    useEffect(() => {
       const visu = document.getElementById("visualizer-container");
       if(visu){
        console.log(visu.clientWidth, "from visu")
           setMaxW(visu.clientWidth)
       }
    });
    return (
        <div className="lg:w-full w-[10rem] border px-3 lg:py-3 py-1.5 text-black">
             <span className="pr-3">{arrayCount}</span>
<label htmlFor="basic-range-slider-usage" className="sr-only">Count Control</label>
<input 
onChange={updateCount}
type="range"  className="bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none
  [&::-webkit-slider-thumb]:w-2.5
  [&::-webkit-slider-thumb]:h-2.5
  [&::-webkit-slider-thumb]:-mt-0.5
  [&::-webkit-slider-thumb]:appearance-none
  [&::-webkit-slider-thumb]:bg-white
  [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)]
  [&::-webkit-slider-thumb]:rounded-full
  [&::-webkit-slider-thumb]:transition-all
  [&::-webkit-slider-thumb]:duration-150
  [&::-webkit-slider-thumb]:ease-in-out
  [&::-webkit-slider-thumb]:

  [&::-moz-range-thumb]:w-2.5
  [&::-moz-range-thumb]:h-2.5
  [&::-moz-range-thumb]:appearance-none
  [&::-moz-range-thumb]:bg-white
  [&::-moz-range-thumb]:border-4
  [&::-moz-range-thumb]:border-pink-600
  [&::-moz-range-thumb]:rounded-full
  [&::-moz-range-thumb]:transition-all
  [&::-moz-range-thumb]:duration-150
  [&::-moz-range-thumb]:ease-in-out

  [&::-webkit-slider-runnable-track]:w-full
  [&::-webkit-slider-runnable-track]:h-2
  [&::-webkit-slider-runnable-track]:bg-gray-100
  [&::-webkit-slider-runnable-track]:rounded-full
  [&::-webkit-slider-runnable-track]:

  [&::-moz-range-track]:w-full
  [&::-moz-range-track]:h-2
  [&::-moz-range-track]:bg-gray-100
  [&::-moz-range-track]:rounded-full" id="basic-range-slider-usage"
 min={10} max={maxW ? maxW : 200}    defaultValue={arrayCount}
  />
  </div>
    );
};
export default CountControl;