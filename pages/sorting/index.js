import React from 'react';
import BinaryTree from '@/components/BinaryTree';
import { useDispatch, useSelector } from 'react-redux';
import { setRunning, setStatus } from '@/redux/reducers/treesReducer';
import { treeBubbleSort } from '@/utils/treesAlgos';


export default function SortBinaries() {
  const dispatch = useDispatch();
  const running = useSelector(state => state.trees.running);
  const handleStartSort =  () => {
    dispatch(setRunning(true));
  };


  return (
      <>
      <button className='text-black dark:text-gray-100 h-48 text-lg mx-auto' onClick={() => handleStartSort(treeBubbleSort)} disabled={running}>
       <span> Start Bubble Sort</span>
      </button>
      <BinaryTree />
      
      </>
  );
}
