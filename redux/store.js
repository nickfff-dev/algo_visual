import sortersSlice from "./reducers/sortersSlice";
import canvasSlice from "./reducers/canvasSlice";
import documentSlice from "./reducers/documentSlice";
import nodeSlice, { nodesAdapter }  from "./reducers/nodeSlice";
import {configureStore} from '@reduxjs/toolkit';




export const store = configureStore({
        reducer: {
            sorting : sortersSlice,
            canvas : canvasSlice,
            document : documentSlice,
            nodes : nodeSlice,
        },
        
    });



export const { selectById: selectNodeById, selectAll: selectAllNodes } =
    nodesAdapter.getSelectors((state) => state.nodes);