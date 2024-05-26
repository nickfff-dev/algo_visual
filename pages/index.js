import { Ubuntu_Mono} from 'next/font/google'
import { useCallback,useEffect } from 'react';
import dynamic from "next/dynamic";
import { v4 as uuidv4 } from 'uuid';
import { store } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { SelectionSort } from '@/utils/algoclass';
import { setDocument } from '@/redux/reducers/documentSlice';
import { nodesLoaded } from '@/redux/reducers/nodeSlice';
import { selectAllNodes } from '@/redux/store';
import { nodeStatus, node } from '@/utils/constants';
import { generateInitialDoc } from '@/components/generateArray';
const mono = Ubuntu_Mono({subsets: ['latin'], weight: ['400', '700']})
const Visualiser = dynamic(() => import("@components/D3graphics/Visualiser"), { ssr: false });
generateInitialDoc(20)
export default function Home() {
 
 const {selectedDocument, isSample} = useSelector((state) => state.document);
 const nodes = useSelector(selectAllNodes);
 const animeRunning = useSelector((state) => state.canvas.animeRunning);
 const getNodesFromDocument = (doc) => {
 
  const nodes = doc.content.nodes.map((value) => ({
    id: uuidv4(),
    value: value,
    status: nodeStatus.NORMAL,
    time: new Date().getTime(),
  }));
  return nodes;
 };
 const dispatchNodes = ()=>{
  const nodes = getNodesFromDocument(selectedDocument);
  store.dispatch(nodesLoaded(nodes));
 };

 const generateDocument = () => {
  console.log('selectedDocument', nodes);
  dispatchNodes();
  };

  useEffect(() => {
    if (selectedDocument){
      generateDocument();
    }
   
  }, [selectedDocument]);

  return (   
    <main
      className={`flex min-h-screen min-w-screen flex-col w-full items-center justify-between p-24 ${mono.className}`}
    >
      <Visualiser/>
    </main>
  );
}
