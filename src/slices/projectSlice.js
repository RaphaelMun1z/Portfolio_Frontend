import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import projectService from "../services/projectService";

const initialState = {
    projects: [],
    project: null,
    error: false,
    success: false,
    loading: false,
}

// Get projects
export const getProjects = createAsyncThunk(
    "project/get",
    async (_, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token

        const data = await projectService.getProjects(token)

        return data
    }
)

export const projectSlice = createSlice({
    name: "project",
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
            .addCase(getProjects.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(getProjects.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.projects = action.payload
            })
            .addCase(getProjects.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.projects = null
            })
    },
})

export const { reset } = projectSlice.actions
export default projectSlice.reducer