import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import databaseService from "../services/databaseService";

const initialState = {
    databases: [],
    database: null,
    databaseUsage: null,
    error: false,
    success: false,
    loading: false,
}

// Create a database
export const createDatabase = createAsyncThunk(
    "database/create",
    async (database, thunkAPI) => {

        const token = thunkAPI.getState().auth.user.token
        const data = await databaseService.createDatabase(database, token)

        // Check for errors
        if (data.error) {
            return thunkAPI.rejectWithValue(data.error)
        }

        return data
    }
)

export const getDatabaseById = createAsyncThunk(
    "database/getdatabase",
    async (id) => {
        const data = await databaseService.getDatabaseById(id)

        return data
    }
)

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
        resetMessage: (state) => {
            state.loading = false
            state.error = false
            state.success = false
            state.message = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createDatabase.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(createDatabase.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.database = action.payload
                state.message = "Linguagem cadastrada com sucesso!"
            })
            .addCase(createDatabase.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.database = {}
            })
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
            .addCase(getDatabaseById.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(getDatabaseById.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.database = action.payload
            })
    },
})

export const { resetMessage } = databaseSlice.actions
export default databaseSlice.reducer