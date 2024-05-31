import {
  incrementComparisons,
  incrementSwaps,
  setArray,
  setCompElements,
  setSwapElements,
  setSpecialElement,
  setMergeArr1,
  setMergeArr2,
  resetMergeArrays,
} from "/redux/reducers/sortersSlice";
import { store } from "/redux/store";
export const MakeDelay = async (delay) => {
  await new Promise((resolve) => setTimeout(resolve, delay));
};


export async function SelectionSort() {
  let array = store.getState().sorting.array.slice();
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    store.dispatch(setSpecialElement(minIndex));
    for (let j = i + 1; j < array.length; j++) {
      if (!store.getState().sorting.running) return;
      store.dispatch(setCompElements([minIndex, j]));
      await MakeDelay(store.getState().sorting.speed);
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
      store.dispatch(incrementComparisons());
      store.dispatch(setSwapElements([-1, -1]));
      store.dispatch(setCompElements([minIndex, j]));
    }
    array = store.getState().sorting.array.slice();
    store.dispatch(setSwapElements([i, minIndex]));
    if (minIndex !== i) {
      let temp = array[minIndex];
      array[minIndex] = array[i];
      array[i] = temp;
      store.dispatch(incrementSwaps());
      await MakeDelay(store.getState().sorting.speed);
    }
    store.dispatch(setSwapElements([-1, -1]));
    store.dispatch(setSpecialElement(-1));
    store.dispatch(setArray(array));
  }
};


export async function BubbleSort() {
  let array = store.getState().sorting.array.slice();
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      await MakeDelay(store.getState().sorting.speed);
      store.dispatch(setCompElements([j, j + 1]));
      store.dispatch(incrementComparisons());
      array = store.getState().sorting.array.slice();
      if (array[j] > array[j + 1]) {
        store.dispatch(setSwapElements([j, j + 1]));
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        store.dispatch(incrementSwaps());
        await MakeDelay(store.getState().sorting.speed);
      }
      store.dispatch(setSwapElements([-1, -1]));
      store.dispatch(setArray(array));
    } 
  }
};


export async function InsertionSort() {
  let array = store.getState().sorting.array.slice();
  for (let i = 1; i < array.length; i++) {
    let j = i;

    while (j > 0 && array[j] < array[j - 1]) {
      if (!store.getState().sorting.running) return;
      await MakeDelay(store.getState().sorting.speed);

      array = store.getState().sorting.array.slice();
      let key = array[j];
      array[j] = array[j - 1];
      array[j - 1] = key;

      store.dispatch(setCompElements([i, j]));
      store.dispatch(setSwapElements([j, j - 1]));
      store.dispatch(incrementComparisons());
      store.dispatch(incrementSwaps());
      store.dispatch(setArray(array));

      j--;
    }

  }
};


export async function MergeSort() {
  
  let array = store.getState().sorting.array.slice();
  await mergeSortHelper(0, array.length - 1);

 
};

async function mergeSortHelper(l, h) {
  if(!store.getState().sorting.running) return;
  if (l >= h) return;
  let m = Math.floor((l + h) / 2);

  await mergeSortHelper(l, m);
  await mergeSortHelper(m + 1, h);

  store.dispatch(setMergeArr1([l, m]));
  store.dispatch(setMergeArr2([m + 1, h]));

  await merge(l, m, h);
  store.dispatch(resetMergeArrays());
};

async function merge(l, m, h) {
  let array = store.getState().sorting.array.slice();
  let n1 = l;
  let n2 = m + 1;
  let n3 = l;
  let temp = [];

  while (n1 <= m && n2 <= h) {
    if (!store.getState().sorting.running) return;
    store.dispatch(setCompElements([n1, n1]));
    store.dispatch(incrementComparisons());

    if(array[n1] < array[n2]) {
      temp[n3++] = array[n1++];
    } else {
      temp[n3++] = array[n2++];
    }
  }

  for(; n1 <= m; n1++) {
    if (!store.getState().sorting.running) return;
    await MakeDelay(store.getState().sorting.speed);
    store.dispatch(setCompElements([n1, n1]));
    store.dispatch(incrementComparisons());
    temp[n3++] = array[n1];
  }

  for(; n2 <= h; n2++) {
    if (!store.getState().sorting.running) return;
    await MakeDelay(store.getState().sorting.speed);
    store.dispatch(setCompElements([n2, n2]));
    store.dispatch(incrementComparisons());
    temp[n3++] = array[n2];
  }

  for(let i = l; i <= h; i++) {
    if (!store.getState().sorting.running) return;
    await MakeDelay(store.getState().sorting.speed);
    array = store.getState().sorting.array.slice();
    array[i] = temp[i];
    store.dispatch(setSwapElements([i, i]));
    store.dispatch(incrementSwaps());
    store.dispatch(setArray(array));
  }
};

export async function QuickSort() {
  let array = store.getState().sorting.array.slice();
  await quickSortHelper(0, array.length - 1);
};

async function quickSortHelper(low, high) {
  if (!store.getState().sorting.running) return;
  if (low < high) {
    let pi = await partition(low, high);
   await quickSortHelper(low, pi - 1);
   await quickSortHelper(pi + 1, high);
  }
}

async function partition(low, high) {
  let array = store.getState().sorting.array.slice();
  let pivot = array[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (!store.getState().sorting.running) return;
    store.dispatch(setCompElements([j, high]));
    store.dispatch(incrementComparisons());
    if (array[j] < pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
      store.dispatch(setSwapElements([i, j])); // Dispatch swap action
      store.dispatch(incrementSwaps()); // Increment swaps
      await MakeDelay(store.getState().sorting.speed); // Delay for visualization
      store.dispatch(setArray(array.slice()));
    }
  }
  array = store.getState().sorting.array.slice();
  [array[i + 1], array[high]] = [array[high], array[i + 1]]; // Swap pivot element with element at i+1
  store.dispatch(setSwapElements([i + 1, high])); // Dispatch swap action
  store.dispatch(incrementSwaps());
  await MakeDelay(store.getState().sorting.speed); // Delay for visualization
  store.dispatch(setArray(array.slice()));

  return i + 1;
};