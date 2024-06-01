import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTree, setRunning } from '@/redux/reducers/treesReducer';
import { treeBubbleSort, treeSelectionSort } from '@/utils/treesAlgos';
import { generateUnsortedTreePayload } from '@/utils/helpers';

export default function BinaryTree() {
    const treeState = useSelector(state => state.trees);
    const dispatch = useDispatch();
  
  const root = useSelector((state) => state.trees.tree);
  React.useEffect(() => {
    const sampleTree = generateUnsortedTreePayload(3, 2);
    dispatch(setTree(sampleTree));
  }, [dispatch]);

  React.useEffect(() => {
    if (treeState.running) {
      treeSelectionSort().then(()=> dispatch(setRunning(false)));
    }
    }, [treeState.running, dispatch]);
   

  // Helper function to recursively render nodes
  const renderNode = (node, x = 0, y = 0, dx = 250, dy = 80, level = 0) => {
    const childNodes = node.children || [];
    const isCompNode = treeState.compNodes.includes(node.model.id);
    const isSwapNode = treeState.swapNodes.includes(node.model.id);
  
    const childCount = childNodes.length;
    const width = childCount * dx;
    const startX = x - (width / 2) + (dx / 2);
  
    return (
      <>
        <circle  cx={x} cy={y} r={10} fill={isSwapNode ? "purple" : isCompNode ? "blue" : "green"} />
        <text
          x={x}
          y={y}
          fontSize="10px"
          textAnchor="middle"
          alignmentBaseline="middle"
          fill="white"
          stroke="white"
          onClick={() => alert(node.model.id)}
          className='cursor-pointer'
        >
          {node.model.id}
        </text>
        {childNodes.map((child, index) => {
          const childX = startX + index * dx;
          const childY = y + dy;
          return (
            <React.Fragment key={child.model.id}>
              <line x1={x} y1={y + 10} x2={childX} y2={childY - 10} stroke="black" />
              {renderNode(child, childX, childY, dx / 1.3, dy, level + 1)}
            </React.Fragment>
          );
        })}
      </>
    );
  };
  
    return (
      <div className="flex w-full justify-center items-center h-screen bg-gray-100">
        <svg
          viewBox="-450 0 900 400"
          className="border border-gray-400 bg-white"
          width="900"
          height="600"
        >
          {root && renderNode(root)}
        </svg>
      </div>
    );
  };
  
