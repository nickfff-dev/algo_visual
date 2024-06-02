import { useDispatch, useSelector } from "react-redux"
import { useCallback, useState } from "react"
import { setTreeData, setTreeShape } from "@/redux/reducers/treesReducer";
import { generateUnsortedTreePayload } from '@/utils/helpers';


const TreeShapeInput = () => {
    const dispatch = useDispatch();
    const treeShape = useSelector((state) => state.trees.treeShape);
    const [treeShapeData, setTreeShapeData] = useState(JSON.parse(JSON.stringify(treeShape)));
    
    const updateTreeShape = useCallback((e) => {
        e.preventDefault();
        dispatch(setTreeShape(treeShapeData));
        const payload = generateUnsortedTreePayload(treeShapeData.levels, treeShapeData.childrenNodes);
        const clonedPayload = JSON.parse(JSON.stringify(payload));
        dispatch(setTreeData(clonedPayload));
    }, [dispatch, treeShapeData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTreeShapeData({ ...treeShapeData, [name]: parseInt(value) });
    };


    return (
        <form onSubmit={updateTreeShape} id='treeShapeform' className="dark:text-gray-200 flex flex-col items-center justify-center lg:w-full w-[10rem] border px-3 lg:py-3 py-1.5 text-black">

  <div className="flex justify-end gap-x-2">
  <label htmlFor="treelevels" className="sr-only">Levels</label>
    <span >Levels</span>
<input
onChange={handleInputChange}
name='levels'
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
  [&::-moz-range-track]:rounded-full" id="treeLevels"
 min={2} max={6}    defaultValue={treeShape.levels}
  />
    <span>{treeShapeData.levels}</span>
  </div>
<div className="flex  justify-end gap-x-2">
<label htmlFor="childrenNodes" className="sr-only">Children</label>
        <span>Children</span>
  <input
name='childrenNodes'
onChange={handleInputChange}
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
  [&::-moz-range-track]:rounded-full" id="childrenNodes"
 min={1} max={2}    defaultValue={treeShape.childrenNodes}
  />
    <span>{treeShapeData.childrenNodes}</span>
</div>
  <input type='submit' value='Generate'
  className="bg-gray-900 dark:bg-gray-100 dark:text-black  text-white font-bold  px-4 text-xs cursor-pointer rounded"
  />
  </form>
    );
};
export default TreeShapeInput;