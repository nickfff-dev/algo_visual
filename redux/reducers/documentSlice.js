import { createSlice } from "@reduxjs/toolkit";


const initialDocumentState = {
    isSample: true,
    selectedDocument: {
        title: 'Sample Document',
        description: '',
        content: { nodes: [] },
    },
}

export const documentSlice = createSlice({
    name: "document",   
    initialState: initialDocumentState,
    reducers: {
        setDocument: (state, action) => {
            state.isSample = false;
            state.selectedDocument = action.payload;
        },
    },
});

export const { setDocument } = documentSlice.actions;

export default documentSlice.reducer;