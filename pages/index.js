import { Ubuntu_Mono} from 'next/font/google';
import { generateArray } from '@/components/generateArray';
import { useEffect, useCallback } from 'react';
import { store } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import BinaryTree from '@/components/BinaryTree';
import { dataStructures } from '@/utils/constants';
import { setRunning, resetStats } from '@/redux/reducers/sortersSlice';
import { generateUnsortedTreePayload } from '@/utils/helpers';
import { setTreeData } from '@/redux/reducers/treesReducer';
import RenderArray from '@/components/ArrayView';
const mono = Ubuntu_Mono({subsets: ['latin'], weight: ['400', '700']})



export default function Home() {
  const dispatch = useDispatch();
  const algorithmId = useSelector((state) => state.page.algorithmId);
  const dataStructure = useSelector((state) => state.page.dataStructure);
  const data = store.getState().sorting.array.slice();


  const generateTreeData = useCallback(() => {
    const payload = generateUnsortedTreePayload(5, 2);
    const clonedPayload = JSON.parse(JSON.stringify(payload));
    dispatch(setTreeData(clonedPayload));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setRunning(false));
    dispatch(resetStats());
    if (algorithmId ){
      data.length === 0 && generateArray();
    }
  });
  return (   
    <div
    id='visualizer-container'
      className={`${mono.className} w-[20%] mx-auto`}>
      {dataStructure === dataStructures.ARRAY ? <RenderArray/> : <BinaryTree/>}
    </div>
  );
}
