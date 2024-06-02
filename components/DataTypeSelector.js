import { useDispatch } from "react-redux"
import { useCallback } from "react"
import { dataStructures } from "@/utils/constants";
import { setDataStructure, setAlgorithmId } from "@/redux/reducers/documentSlice";

export default function DataStructureSelector() {
  const dispatch = useDispatch();
  const handleSelectDataStructure= useCallback((e) => {
    dispatch(setDataStructure(e.target.value));
    if (e.target.value === dataStructures.TREE) {
      dispatch(setAlgorithmId('treeBubbleSort'));
    } else {dispatch(setAlgorithmId('bubbleSort'))}
  }, [dispatch]);

    return(
        <div className="relative  w-[12rem] lg:w-[200px]">
        <select
          onChange={handleSelectDataStructure}
          className="peer  w-full border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2 lg:py-4 font-sans text-sm font-normal text-gray-900 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
          <option value={dataStructures.ARRAY}>Array</option>
          <option value={dataStructures.TREE}>tree</option>
        </select>
        <label
          className="before:content[' '] font-medium after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 -md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow  after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Select Data Structure
        </label>
      </div>
    )
};