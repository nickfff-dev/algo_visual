import sortersSlice from "./reducers/sortersSlice";
import  pageSlice  from "./reducers/documentSlice";
import {configureStore} from '@reduxjs/toolkit';


export const store = configureStore({
        reducer: {
            sorting : sortersSlice,
            page: pageSlice,
        },
        
    });