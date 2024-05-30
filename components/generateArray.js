import { store } from "@/redux/store";
import { setArray, setStatus, setBarWidth } from "@/redux/reducers/sortersSlice";


export const generateArray = (arraySize) => {
    const visualizerContainer = document.getElementById("visualizer-container");
    let width = visualizerContainer.clientWidth;
    
    const maxBarWidth = Math.floor(width / arraySize);
    // console.log(maxBarWidth, width, arraySize);
    store.dispatch(setBarWidth(maxBarWidth));
    let min = 1;
    let max = 500;
    let array = [];
    for (let i = 0; i < arraySize; i++) {
        array.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    let shuffledArray = array
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
    store.dispatch(setArray(shuffledArray));
    store.dispatch(setStatus("unsorted"));
};
