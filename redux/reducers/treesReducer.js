import { createSlice } from "@reduxjs/toolkit";
import TreeModel from 'tree-model';

const initialState = {
  tree: null,
  comparisons: 0,
  swaps: 0,
  running: false,
  status: "unsorted",
  speed: 100,
  maxSpeed: 500,
  compNodes: [],
  swapNodes: [],
  specialNode: null,
};

export const treeSortingSlice = createSlice({
  name: "trees",
  initialState,
  reducers: {
    setTree: (state, action) => {
      const treeModel = new TreeModel();
      state.tree = treeModel.parse(action.payload);
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
        state.compNodes = [];
        state.swapNodes = [];
        state.specialNode = null;
      }
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
  setTree,
  incrementComparisons,
  incrementSwaps,
  setRunning,
  setStatus,
  setSpeed,
  resetStats,
  setCompNodes,
  setSwapNodes,
  setSpecialNode,
} = treeSortingSlice.actions;

export default treeSortingSlice.reducer;
