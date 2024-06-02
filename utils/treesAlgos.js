import { 
    incrementComparisons, 
    incrementSwaps,  
    setCompNodes, 
    setSwapNodes, 
    setSpecialNode,
    setTreeData
  } from '@/redux/reducers/treesReducer';
  import { store } from "@/redux/store";
  import { MakeDelay } from './algoclass';
  import { getAllNodes, updateTreeData } from './helpers';

  // Function to perform an in-order traversal and collect nodes in an array
  
  export async function treeBubbleSort() {
    let treeData = JSON.parse(JSON.stringify(store.getState().trees.treeData));
    if (!treeData) return;
  
    const nodes = getAllNodes(treeData); // Get all nodes in the tree
    for (let i = 0; i < nodes.length - 1; i++) {
      for (let j = 0; j < nodes.length - i - 1; j++) {
        if (!store.getState().trees.running) return;
  
        await MakeDelay(store.getState().trees.speed);
  
        const nodeA = nodes[j];
        const nodeB = nodes[j + 1];
  
        store.dispatch(setCompNodes([nodeA.id, nodeB.id]));
        store.dispatch(incrementComparisons());
  
        if (nodeA.id > nodeB.id) {
          store.dispatch(setSwapNodes([nodeA.id, nodeB.id]));
  
          // Swap the node IDs
          [nodeA.id, nodeB.id] = [nodeB.id, nodeA.id];
          store.dispatch(incrementSwaps());
  
          await MakeDelay(store.getState().trees.speed);
  
          let updatedTreeData = updateTreeData(treeData, nodes);
          store.dispatch(setTreeData(updatedTreeData));
        }
        store.dispatch(setSwapNodes([]));
      }
    }
    store.dispatch(setCompNodes([]));
    store.dispatch(setSpecialNode(null));
  };


  export async function treeSelectionSort() {
    let treeData = JSON.parse(JSON.stringify(store.getState().trees.treeData));
    if (!treeData) return;
  
    const nodes = getAllNodes(treeData); // Get all nodes in the tree
   
    for (let i = 0; i < nodes.length - 1; i++) {
      let minIndex = i;
      store.dispatch(setSpecialNode(nodes[minIndex].id));
  
      for (let j = i + 1; j < nodes.length; j++) {
        if (!store.getState().trees.running) return;
  
        await MakeDelay(store.getState().trees.speed);
  
        let nodeA = nodes[minIndex];
        let nodeB = nodes[j];
  
        store.dispatch(setCompNodes([nodeA.id, nodeB.id]));
        store.dispatch(incrementComparisons());
  
        if (nodeB.id < nodeA.id) {
          minIndex = j;
        }
  
        store.dispatch(setSpecialNode(nodes[minIndex].id));
      }
  
      if (minIndex !== i) {

        let nodeA = nodes[i];
        let nodeB = nodes[minIndex];
  
        store.dispatch(setSwapNodes([nodeA.id, nodeB.id]));
        
        // Swap the node IDs
        [nodeA.id, nodeB.id] = [nodeB.id, nodeA.id];
        store.dispatch(incrementSwaps());
  
        await MakeDelay(store.getState().trees.speed);
  
        // Update the tree state
        let updatedTreeData = updateTreeData(treeData, nodes);
        store.dispatch(setTreeData(updatedTreeData));
        
      }
      console.log("from algo",nodes, treeData);
      store.dispatch(setSwapNodes([]));
      store.dispatch(setSpecialNode(null));
    }
    store.dispatch(setCompNodes([]));
  };



