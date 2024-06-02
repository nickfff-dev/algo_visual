import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  treeData: null,
  comparisons: 0,
  swaps: 0,
  running: false,
  status: "unsorted",
  treeShape: {levels:2, childrenNodes:2},
  speed: 50,
  maxSpeed: 500,
  compNodes: [],
  swapNodes: [],
  specialNode: null,
};

export const treeSortingSlice = createSlice({
  name: "trees",
  initialState,
  reducers: {
    setTreeData: (state, action) => {
      state.treeData = action.payload;
      state.status = "unsorted";
    },
    incrementComparisons: (state) => {
      state.comparisons++;
    },
    incrementSwaps: (state) => {
      state.swaps++;
    },
    setRunning: (state, action) => {
      state.running = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
      if (action.payload === "unsorted") {
        state.comparisons = 0;
        state.swaps = 0;
        state.compNodes = [-1, -1];
        state.swapNodes = [-1, -1];
        state.specialNode = null;
      }
    },
    setTreeShape: (state, action) => {
      state.treeShape = action.payload;
    },
    setSpeed: (state, action) => {
      state.speed = action.payload;
    },
    resetStats: (state) => {
      state.comparisons = 0;
      state.swaps = 0;
      state.compNodes = [];
      state.swapNodes = [];
      state.specialNode = null;
      state.status = "unsorted";
    },
    setCompNodes: (state, action) => {
      state.compNodes = action.payload;
    },
    setSwapNodes: (state, action) => {
      state.swapNodes = action.payload;
    },
    setSpecialNode: (state, action) => {
      state.specialNode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setTreeData,
  incrementComparisons,
  incrementSwaps,
  setRunning,
  setStatus,
  setSpeed,
  setTreeShape,
  resetStats,
  setCompNodes,
  setSwapNodes,
  setSpecialNode,
} = treeSortingSlice.actions;

export default treeSortingSlice.reducer;
