import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    algorithmName: "SelectionSort",
    algorithmId: "selectionSort",
    algorithmCategory: "Sorting",
    mobileMenuOpen: false,
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
    }
});

export const { setAlgorithmName, setAlgorithmId, setAlgorithmCategory, setMobileMenuOpen } = pageSlice.actions;

export default pageSlice.reducer;