import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import projectService from "../services/projectService";

const initialState = {
    projects: [],
    project: null,
    error: false,
    success: false,
    loading: false,
}

// Create project
export const createProject = createAsyncThunk(
    "project/create",
    async (project, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token
        const data = await projectService.createProject(project, token)

        // Check for errors
        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0])
        }

        return data
    }
)

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
        resetMessage: (state) => {
            state.loading = false
            state.error = false
            state.success = false
            state.message = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createProject.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(createProject.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.project = action.payload
                state.message = "Projeto criado com sucesso!"
            })
            .addCase(createProject.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.project = {}
            })
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

export const { resetMessage } = projectSlice.actions
export default projectSlice.reducer