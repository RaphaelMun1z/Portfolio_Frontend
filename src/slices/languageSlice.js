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

export const getLanguageById = createAsyncThunk(
    "language/getlanguage",
    async (id) => {
        const data = await languageService.getLanguageById(id)

        return data
    }
)

// Delete a language
export const deleteLanguage = createAsyncThunk(
    "language/delete",
    async (id, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token

        const data = await languageService.deleteLanguage(id, token)

        // Check for errors
        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0])
        }

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
            .addCase(getLanguageById.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(getLanguageById.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.language = action.payload
            })
            .addCase(deleteLanguage.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(deleteLanguage.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.languages = state.languages.filter((language) => {
                    return language.id !== action.payload.id
                })
                state.message = action.payload.message
            })
            .addCase(deleteLanguage.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.language = {}
            })
    },
})

export const { resetMessage } = languageSlice.actions
export default languageSlice.reducer