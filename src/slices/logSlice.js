import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import logService from "../services/logService";

const initialState = {
    logs: [],
    log: null,
    error: false,
    success: false,
    loading: false,
}

// Create a log
export const createLog = createAsyncThunk(
    "log/create",
    async (log, thunkAPI) => {
        const data = await logService.createLog(log)

        // Check for errors
        if (data.error) {
            return thunkAPI.rejectWithValue(data.error)
        }

        return data
    }
)

// Get logs
export const getLogs = createAsyncThunk(
    "log/getlogs",
    async (_, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token
        const data = await logService.getLogs(token)

        return data
    }
)

// Delete logs
export const deleteLogs = createAsyncThunk(
    "log/deletelogs",
    async (_, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token
        const data = await logService.deleteLogs(token)

        return data
    }
)

export const logSlice = createSlice({
    name: "log",
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
            .addCase(createLog.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(createLog.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.log = action.payload
                state.message = "Log cadastrada com sucesso!"
            })
            .addCase(createLog.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.log = {}
            })
            .addCase(getLogs.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(getLogs.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.logs = action.payload
            })
            .addCase(deleteLogs.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(deleteLogs.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.logs = []
                state.message = action.payload.message
            })
            .addCase(deleteLogs.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.log = {}
            })
    },
})

export const { resetMessage } = logSlice.actions
export default logSlice.reducer