import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import languageService from "../services/languageService";

const initialState = {
    languages: [],
    language: null,
    error: false,
    success: false,
    loading: false,
}

// Create a language
export const createLanguage = createAsyncThunk(
    "language/create",
    async (language, thunkAPI) => {

        const token = thunkAPI.getState().auth.user.token
        const data = await languageService.createLanguage(language, token)

        // Check for errors
        if (data.error) {
            return thunkAPI.rejectWithValue(data.error)
        }

        return data
    }
)

// Get languages
export const getLanguages = createAsyncThunk(
    "language/getlanguages",
    async () => {
        const data = await languageService.getLanguages()

        return data
    }
)

export const languageSlice = createSlice({
    name: "language",
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
            .addCase(createLanguage.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(createLanguage.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.language = action.payload
                state.message = "Linguagem cadastrada com sucesso!"
            })
            .addCase(createLanguage.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.language = {}
            })
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

export const { resetMessage } = languageSlice.actions
export default languageSlice.reducer