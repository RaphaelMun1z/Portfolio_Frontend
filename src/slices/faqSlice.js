import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import faqService from "../services/faqService";

const initialState = {
    faqs: [],
    faq: null,
    error: false,
    success: false,
    loading: false,
}

// Create a faq
export const createFaq = createAsyncThunk(
    "faq/create",
    async (faq, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token
        const data = await faqService.createFaq(faq, token)

        // Check for errors
        if (data.error) {
            return thunkAPI.rejectWithValue(data.error)
        }

        return data
    }
)

// Get faqs
export const getFaqs = createAsyncThunk(
    "faq/getfaqs",
    async () => {
        const data = await faqService.getFaqs()

        return data
    }
)

export const faqSlice = createSlice({
    name: "faq",
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
            .addCase(createFaq.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(createFaq.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.faq = action.payload
                state.message = "Faq cadastrada com sucesso!"
            })
            .addCase(createFaq.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.faq = {}
            })
            .addCase(getFaqs.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(getFaqs.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.faqs = action.payload
            })
    },
})

export const { resetMessage } = faqSlice.actions
export default faqSlice.reducer