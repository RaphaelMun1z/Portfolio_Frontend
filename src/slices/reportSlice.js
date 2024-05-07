import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import reportService from "../services/reportService";

const initialState = {
    reports: [],
    report: null,
    error: false,
    success: false,
    loading: false,
}

// Create a report
export const createReport = createAsyncThunk(
    "report/create",
    async (report, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token
        const data = await reportService.createReport(report, token)

        // Check for errors
        if (data.error) {
            return thunkAPI.rejectWithValue(data.error)
        }

        return data
    }
)

// Get repots
export const getReports = createAsyncThunk(
    "report/getreports",
    async (_, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token
        const data = await reportService.getReports(token)

        return data
    }
)

// Delete a report
export const deleteReport = createAsyncThunk(
    "report/delete",
    async (id, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token

        const data = await reportService.deleteReport(id, token)

        // Check for errors
        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0])
        }

        return data
    }
)

export const reportSlice = createSlice({
    name: "report",
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
            .addCase(createReport.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(createReport.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.report = action.payload
                state.message = "Relato cadastrado com sucesso!"
            })
            .addCase(createReport.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.report = {}
            })
            .addCase(getReports.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(getReports.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.reports = action.payload
            })
            .addCase(deleteReport.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(deleteReport.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.reports = state.reports.filter((report) => {
                    return report.id !== action.payload.id
                })
                state.message = action.payload.message
            })
            .addCase(deleteReport.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.report = {}
            })
    },
})

export const { resetMessage } = reportSlice.actions
export default reportSlice.reducer