import React, {useCallback} from 'react';
import BinaryTree from '@/components/BinaryTree';
import { useDispatch, useSelector } from 'react-redux';
import { setRunning, setStatus } from '@/redux/reducers/treesReducer';
import { treeBubbleSort } from '@/utils/treesAlgos';
import { generateUnsortedTreePayload } from '@/utils/helpers';
import { setTreeData } from '@/redux/reducers/treesReducer';


export default function SortBinaries() {
  const dispatch = useDispatch();
  const running = useSelector(state => state.trees.running);
  const handleStartSort =  () => {
    dispatch(setRunning(true));
  };

  const generateTreeData = useCallback(() => {
    const payload = generateUnsortedTreePayload(5, 2);
    const clonedPayload = JSON.parse(JSON.stringify(payload));
    dispatch(setTreeData(clonedPayload));
  }, [dispatch]);

  React.useEffect(() => {
    generateTreeData();
  }, [ generateTreeData]);


  return (
      <>
      <button className='text-black dark:text-gray-100 h-48 text-lg mx-auto' onClick={() => handleStartSort(treeBubbleSort)} disabled={running}>
       <span> Start Bubble Sort</span>
      </button>
      <BinaryTree />
      
      </>
  );
}
