import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toolService from "../services/toolService";

const initialState = {
    tools: [],
    tool: null,
    error: false,
    success: false,
    loading: false,
}

// Get tools
export const getTools = createAsyncThunk(
    "tool/gettools",
    async (_, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token

        const data = await toolService.getTools(token)

        return data
    }
)

export const toolSlice = createSlice({
    name: "tool",
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
            .addCase(getTools.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(getTools.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.tools = action.payload
            })
    },
})

export const { reset } = toolSlice.actions
export default toolSlice.reducer