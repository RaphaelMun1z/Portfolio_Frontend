import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import databaseService from "../services/databaseService";

const initialState = {
    databases: [],
    database: null,
    error: false,
    success: false,
    loading: false,
}

// Get databases
export const getDatabases = createAsyncThunk(
    "database/getdatabases",
    async () => {
        const data = await databaseService.getDatabases()

        return data
    }
)

export const databaseSlice = createSlice({
    name: "database",
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
            .addCase(getDatabases.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(getDatabases.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.databases = action.payload
            })
    },
})

export const { reset } = databaseSlice.actions
export default databaseSlice.reducer