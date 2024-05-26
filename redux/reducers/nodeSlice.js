import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { loadingStatus } from "../../utils/constants";


export const nodesAdapter = createEntityAdapter({
    selectId: (node) => node.id,
    sortComparer: (a, b) => a.time - b.time,
});

export const nodeSlice = createSlice({
    name: "nodes",
    initialState: nodesAdapter.getInitialState({
        status: loadingStatus.IDLE,
        selectedId: "",
    }),
    reducers: {
        nodeAdded: nodesAdapter.addOne,
        nodesLoaded: nodesAdapter.setAll,
        nodeRemoved: nodesAdapter.removeOne,
        nodeUpdated: nodesAdapter.updateOne,
        nodesUpdated: nodesAdapter.updateMany,
        nodeDeleted: nodesAdapter.removeOne,
        nodeDeleteAll: nodesAdapter.removeAll,
        nodeSelected: (state, action) => {
            state.selectedId = action.payload;
        },
    },
});

export const {
    nodeAdded,
    nodesLoaded,
    nodeRemoved,
    nodeUpdated,
    nodesUpdated,
    nodeDeleted,
    nodeDeleteAll,
    nodeSelected,
} = nodeSlice.actions;

export default nodeSlice.reducer;