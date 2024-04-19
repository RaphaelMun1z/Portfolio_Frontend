import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import frameworkService from "../services/frameworkService";

const initialState = {
    frameworks: [],
    framework: null,
    error: false,
    success: false,
    loading: false,
}

// Get frameworks
export const getFrameworks = createAsyncThunk(
    "framework/getframeworks",
    async (_, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token

        const data = await frameworkService.getFrameworks(token)

        return data
    }
)

export const frameworkSlice = createSlice({
    name: "framework",
    initialState,
    reducers: {
        reset: (state) => {
            state.loading = false
            state.error = false
            state.success = false
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFrameworks.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(getFrameworks.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.frameworks = action.payload
            })
    },
})

export const { reset } = frameworkSlice.actions
export default frameworkSlice.reducer