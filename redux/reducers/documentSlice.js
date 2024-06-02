import { createSlice } from "@reduxjs/toolkit";
import { dataStructures } from "@/utils/constants";
const initialState = {
    algorithmName: "SelectionSort",
    algorithmId: "selectionSort",
    algorithmCategory: "Sorting",
    mobileMenuOpen: false,
    dataStructure: dataStructures.ARRAY,
};

export const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        setAlgorithmName: (state, action) => {
            state.algorithmName = action.payload;
        },
        setAlgorithmId: (state, action) => {
            state.algorithmId = action.payload;
        },
        setAlgorithmCategory: (state, action) => {
            state.algorithmCategory = action.payload;
        },
        setMobileMenuOpen: (state, action) => {
            state.mobileMenuOpen = action.payload;
        },
        setDataStructure: (state, action) => {
            state.dataStructure = action.payload;
        },
    }
});

export const {
    setAlgorithmName,
    setAlgorithmId,
    setAlgorithmCategory,
    setMobileMenuOpen,
    setDataStructure,
} = pageSlice.actions;

export default pageSlice.reducer;