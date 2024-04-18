import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import languageService from "../services/languageService";

const initialState = {
    languages: [],
    language: null,
    error: false,
    success: false,
    loading: false,
}

// Get languages
export const getLanguages = createAsyncThunk(
    "language/getlanguages",
    async (filters, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token

        const data = await languageService.getLanguages(token, filters)

        return data
    }
)

export const languageSlice = createSlice({
    name: "projlanguageect",
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
            .addCase(getLanguages.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(getLanguages.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.languages = action.payload
            })
    },
})

export const { reset } = languageSlice.actions
export default languageSlice.reducer