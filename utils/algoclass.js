import {
  incrementComparisons,
  incrementSwaps,
  setArray,
  setCompElements,
  setSwapElements,
  setSpecialElement,
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
      await MakeDelay(store.getState().sorting.speed);
      store.dispatch(setCompElements([minIndex, j]));
      if (array[j] < array[minIndex]) {
        minIndex = j;
        store.dispatch(setSpecialElement(minIndex));
      }
      store.dispatch(setCompElements([minIndex, j]));
      store.dispatch(incrementComparisons());
      store.dispatch(setSwapElements([-1, -1]));
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