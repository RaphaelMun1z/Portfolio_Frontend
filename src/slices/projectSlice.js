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
    "project/getprojects",
    async (filters) => {
        const data = await projectService.getProjects(filters)

        return data
    }
)

export const getProjectById = createAsyncThunk(
    "project/getproject",
    async (id) => {
        const data = await projectService.getProjectById(id)

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
            .addCase(getProjectById.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(getProjectById.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.project = action.payload
            })
    },
})

export const { reset } = projectSlice.actions
export default projectSlice.reducer