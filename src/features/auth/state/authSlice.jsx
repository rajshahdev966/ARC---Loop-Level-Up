import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        handle: localStorage.getItem("handle") ||null,
        archetype: localStorage.getItem("archetype") ||null,
    },
    reducers: {
        addHandle: (state, action) => {
            state.handle = action.payload;
        },
        addArchetype: (state, action) => {
            state.archetype = action.payload;
        },
    }
})

export const { addHandle, addArchetype } = authSlice.actions;
export default authSlice.reducer;