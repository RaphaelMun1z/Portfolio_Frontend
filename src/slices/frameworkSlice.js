import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import frameworkService from "../services/frameworkService";

const initialState = {
    frameworks: [],
    framework: null,
    error: false,
    success: false,
    loading: false,
}

// Create a framework
export const createFramework = createAsyncThunk(
    "framework/create",
    async (framework, thunkAPI) => {

        const token = thunkAPI.getState().auth.user.token
        const data = await frameworkService.createFramework(framework, token)

        // Check for errors
        if (data.error) {
            return thunkAPI.rejectWithValue(data.error)
        }

        return data
    }
)

// Get frameworks
export const getFrameworks = createAsyncThunk(
    "framework/getframeworks",
    async () => {
        const data = await frameworkService.getFrameworks()

        return data
    }
)

export const getFrameworkById = createAsyncThunk(
    "framework/getframework",
    async (id) => {
        const data = await frameworkService.getFrameworkById(id)

        return data
    }
)

// Delete a framework
export const deleteFramework = createAsyncThunk(
    "framework/delete",
    async (id, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token

        const data = await frameworkService.deleteFramework(id, token)

        // Check for errors
        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0])
        }

        return data
    }
)

export const frameworkSlice = createSlice({
    name: "framework",
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
            .addCase(createFramework.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(createFramework.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.framework = action.payload
                state.message = "Framework cadastrado com sucesso!"
            })
            .addCase(createFramework.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.framework = {}
            })
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
            .addCase(getFrameworkById.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(getFrameworkById.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.framework = action.payload
            })
            .addCase(deleteFramework.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(deleteFramework.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.frameworks = state.frameworks.filter((framework) => {
                    return framework.id !== action.payload.id
                })
                state.message = action.payload.message
            })
            .addCase(deleteFramework.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.framework = {}
            })
    },
})

export const { resetMessage } = frameworkSlice.actions
export default frameworkSlice.reducer