import { store } from "@/redux/store";
import { setArray, setStatus } from "@/redux/reducers/sortersSlice";
import {setDocument} from "@/redux/reducers/documentSlice";


export const generateArray = (arraySize) => {
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

export const generateInitialDoc = (count = 20) => {
  const  initialDocumentState = {
            title: 'Sample Document',
            description: '',
            content: { nodes: [] },
        };
    let array = [];

    let min = 1;
    let max = 1000;
    for (let x = 0; x < count; x++){
        array.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    let shuffledArray = array
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
    initialDocumentState.content.nodes = shuffledArray;
    store.dispatch(setDocument(initialDocumentState));
};