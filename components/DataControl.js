import { useDispatch } from "react-redux"
import { useCallback } from "react"
import { generateArray } from "./generateArray"
import { useSelector } from "react-redux"
import { setStatus } from "@/redux/reducers/sortersSlice"

export default function DataControl(){
  const dispatch = useDispatch();
  const arrayCount = useSelector((state) => state.sorting.arrayCount);

  const handleGenerateArray = useCallback(() => {
    generateArray();
  }, [dispatch, arrayCount])
    return(
<button
onClick={handleGenerateArray}
  className="align-middle lg:text-lg text-sm select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none lg:py-3 py-1.5 px-8 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
  type="button"
>
 Generate Array
</button>
    )
}