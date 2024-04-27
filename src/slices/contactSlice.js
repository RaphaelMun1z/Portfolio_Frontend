import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contactService from "../services/contactService";

const initialState = {
    contactForms: [],
    contactForm: null,
    error: false,
    success: false,
    loading: false,
}

// Create a contact form
export const createContactForm = createAsyncThunk(
    "contact/createcontactform",
    async (contactForm, thunkAPI) => {
        const data = await contactService.createContactForm(contactForm)

        // Check for errors
        if (data.error) {
            return thunkAPI.rejectWithValue(data.error)
        }

        return data
    }
)

// Get contact forms
export const getContactForms = createAsyncThunk(
    "contact/getcontactforms",
    async (_, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token
        const data = await contactService.getContactForms(token)

        return data
    }
)

export const contactSlice = createSlice({
    name: "contact",
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
            .addCase(createContactForm.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(createContactForm.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.contactForm = action.payload
                state.message = "Formulário de contato enviado com sucesso!"
            })
            .addCase(createContactForm.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.contactForm = {}
            })
            .addCase(getContactForms.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(getContactForms.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.contactForms = action.payload
            })
    },
})

export const { resetMessage } = contactSlice.actions
export default contactSlice.reducer