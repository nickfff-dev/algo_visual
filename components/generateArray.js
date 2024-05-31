import { store } from "@/redux/store";
import { setArray, setStatus, setBarWidth, setArrayCount } from "@/redux/reducers/sortersSlice";


export const generateArray = () => {
    const visualizerContainer = document.getElementById("visualizer-container");
    let width = visualizerContainer.clientWidth;
    let items = store.getState().sorting.arrayCount;
    console.log(typeof items);
    if (items > 10) {
        if(items > width){
            items = width;
        }
        const maxBarWidth = Math.floor(width / items);
        store.dispatch(setBarWidth(maxBarWidth));

    } else {
        store.dispatch(setBarWidth(20));
    }
    
    let min = 1;
    let max = 500;
    let array = [];
    for (let i = 0; i < items; i++) {
        array.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    let shuffledArray = array
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
    store.dispatch(setArray(shuffledArray));
    store.dispatch(setStatus("unsorted"));
};
