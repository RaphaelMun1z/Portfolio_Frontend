import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toolService from "../services/toolService";

const initialState = {
    tools: [],
    tool: null,
    error: false,
    success: false,
    loading: false,
}

// Create a tool
export const createTool = createAsyncThunk(
    "tool/create",
    async (tool, thunkAPI) => {

        const token = thunkAPI.getState().auth.user.token
        const data = await toolService.createTool(tool, token)

        // Check for errors
        if (data.error) {
            return thunkAPI.rejectWithValue(data.error)
        }

        return data
    }
)

// Get tools
export const getTools = createAsyncThunk(
    "tool/gettools",
    async () => {
        const data = await toolService.getTools()

        return data
    }
)

export const getToolById = createAsyncThunk(
    "tool/gettool",
    async (id) => {
        const data = await toolService.getToolById(id)

        return data
    }
)

// Delete a tool
export const deleteTool = createAsyncThunk(
    "tool/delete",
    async (id, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token

        const data = await toolService.deleteTool(id, token)

        // Check for errors
        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0])
        }

        return data
    }
)

export const toolSlice = createSlice({
    name: "tool",
    initialState,
    reducers: {
        resetMessage: (state) => {
            state.loading = false
            state.error = false
            state.success = false
            state.message = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createTool.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(createTool.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.tool = action.payload
                state.message = "Linguagem cadastrada com sucesso!"
            })
            .addCase(createTool.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.tool = {}
            })
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
            .addCase(getToolById.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(getToolById.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.tool = action.payload
            })
            .addCase(deleteTool.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(deleteTool.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.tools = state.tools.filter((tool) => {
                    return tool.id !== action.payload.id
                })
                state.message = action.payload.message
            })
            .addCase(deleteTool.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.tool = {}
            })
    },
})

export const { resetMessage } = toolSlice.actions
export default toolSlice.reducer