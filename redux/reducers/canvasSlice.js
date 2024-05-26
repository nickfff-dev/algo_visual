import { createSlice } from "@reduxjs/toolkit";
import { DSAType } from "../../utils/constants";

const initialCanvasState = {
    dsaType: DSAType.ARRAY,
    animeRunning: false,
}

export const canvasSlice = createSlice({
    name: "canvas",
    initialState: initialCanvasState,
    reducers: {
        setDSA: (state, action) => {
            state.dsaType = action.payload;
        },
        setAnimeRunning: (state, action) => {
            state.animeRunning = action.payload;
        },
    },
});

export const { setDSA, setAnimeRunning } = canvasSlice.actions;
export default canvasSlice.reducer;