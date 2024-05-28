import sortersSlice from "./reducers/sortersSlice";

import {configureStore} from '@reduxjs/toolkit';


export const store = configureStore({
        reducer: {
            sorting : sortersSlice,

        },
        
    });