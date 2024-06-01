import { 
    incrementComparisons, 
    incrementSwaps, 
    setTree, 
    setCompNodes, 
    setSwapNodes, 
    setSpecialNode
  } from '@/redux/reducers/treesReducer';
  import { store } from "@/redux/store";
  import { MakeDelay } from './algoclass';
  
  // Function to perform an in-order traversal and collect nodes in an array
  
  export async function treeBubbleSort() {
    const state = store.getState().trees;
    const tree = state.tree;
    if (!tree) return;
  
    const nodes = tree.all(); // Get all nodes in the tree
    console.log(nodes);
    for (let i = 0; i < nodes.length - 1; i++) {
      for (let j = 0; j < nodes.length - i - 1; j++) {
        if (!store.getState().trees.running) return;
  
        await MakeDelay(state.speed);
  
        const nodeA = nodes[j];
        const nodeB = nodes[j + 1];
  
        store.dispatch(setCompNodes([nodeA.model.id, nodeB.model.id]));
        store.dispatch(incrementComparisons());
  
        if (nodeA.model.id > nodeB.model.id) {
          store.dispatch(setSwapNodes([nodeA.model.id, nodeB.model.id]));
  
          // Swap the node IDs
          [nodeA.model.id, nodeB.model.id] = [nodeB.model.id, nodeA.model.id];
          store.dispatch(incrementSwaps());
  
          await MakeDelay(state.speed);
  
          // Update the tree state
          store.dispatch(setTree(tree.model));
        }
        store.dispatch(setSwapNodes([]));
      }
    }
    store.dispatch(setCompNodes([]));
    store.dispatch(setSpecialNode(null));
  };


  export async function treeSelectionSort() {
    const state = store.getState().trees;
    const tree = state.tree;
    if (!tree) return;
  
    const nodes = tree.all(); // Get all nodes in the tree
    console.log(nodes);
    for (let i = 0; i < nodes.length - 1; i++) {
      let minIndex = i;
      store.dispatch(setSpecialNode(nodes[minIndex].model.id));
  
      for (let j = i + 1; j < nodes.length; j++) {
        if (!store.getState().trees.running) return;
  
        await MakeDelay(state.speed);
  
        const nodeA = nodes[minIndex];
        const nodeB = nodes[j];
  
        store.dispatch(setCompNodes([nodeA.model.id, nodeB.model.id]));
        store.dispatch(incrementComparisons());
  
        if (nodeB.model.id < nodeA.model.id) {
          minIndex = j;
        }
  
        store.dispatch(setCompNodes([nodes[minIndex].model.id, nodes[j].model.id]));
      }
  
      if (minIndex !== i) {
        const nodeA = nodes[i];
        const nodeB = nodes[minIndex];
  
        store.dispatch(setSwapNodes([nodeA.model.id, nodeB.model.id]));
  
        // Swap the node IDs
        [nodeA.model.id, nodeB.model.id] = [nodeB.model.id, nodeA.model.id];
        store.dispatch(incrementSwaps());
  
        await MakeDelay(state.speed);
  
        // Update the tree state
        store.dispatch(setTree(tree.model));
      }
      store.dispatch(setSwapNodes([]));
      store.dispatch(setSpecialNode(null));
    }
    store.dispatch(setCompNodes([]));
  };