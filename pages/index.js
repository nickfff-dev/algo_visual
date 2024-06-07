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
  const treeShape = useSelector((state) => state.trees.treeShape);



  const generateTreeData = useCallback(() => {
    const payload = generateUnsortedTreePayload(treeShape.levels, treeShape.childrenNodes);
    const clonedPayload = JSON.parse(JSON.stringify(payload));
    dispatch(setTreeData(clonedPayload));
  }, [dispatch, treeShape]);

  useEffect(() => {
    dispatch(setRunning(false));
    dispatch(resetStats());
    if (algorithmId ){
      data.length === 0 && generateArray();
    }
  });

  useEffect(() => {
    if (dataStructure === dataStructures.TREE) {
      generateTreeData();
    }
  }, [dataStructure, generateTreeData]);
  return (  <div className='overflow-hidden w-full mt-24 h-screen'>
             <div className="absolute -bottom-12 lg:-top-0 top-5 left-0 right-1/2 z-10 w-screen  text-white/10 md:bottom-8 ">
    <svg aria-hidden="true" className="absolute inset-0 h-[85vh] w-screen border">
      <defs>
        <pattern id=":S2:" width="12" height="12" patternUnits="userSpaceOnUse" x="100%" y="100%" patternTransform="translate(112 64)">
          <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#:S2:)"></rect>
    </svg>
  </div>
    <div
    id='visualizer-container'
    
      className={`${mono.className} ${dataStructure === dataStructures.TREE ? '': 'w-[20%] h-[500px]'} mx-auto flex-2 `}>

      {dataStructure === dataStructures.ARRAY ? <RenderArray/> : <BinaryTree/>}
    </div>
    <div className="bg-gray-100 z-[1000]  h-[10vh] mt-32  mx-auto">
      im stats
    </div>
    </div>
  );
}
