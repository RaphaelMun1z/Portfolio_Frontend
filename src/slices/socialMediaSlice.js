import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import socialMediaService from "../services/socialMediaService";

const initialState = {
    socialMedias: [],
    socialMedia: null,
    error: false,
    success: false,
    loading: false,
}

// Create a social media
export const createSocialMedia = createAsyncThunk(
    "socialMedia/create",
    async (socialMedia, thunkAPI) => {

        const token = thunkAPI.getState().auth.user.token
        const data = await socialMediaService.createSocialMedia(socialMedia, token)

        // Check for errors
        if (data.error) {
            return thunkAPI.rejectWithValue(data.error)
        }

        return data
    }
)

// Get social medias
export const getSocialMedia = createAsyncThunk(
    "socialMedia/getsocialmedia",
    async () => {
        const data = await socialMediaService.getSocialMedia()

        return data
    }
)

export const socialMediaSlice = createSlice({
    name: "socialMedia",
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
            .addCase(createSocialMedia.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(createSocialMedia.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.socialMedia = action.payload
                state.message = "Rede social cadastrada com sucesso!"
            })
            .addCase(createSocialMedia.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.socialMedia = {}
            })
            .addCase(getSocialMedia.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(getSocialMedia.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.socialMedia = action.payload
            })
    },
})

export const { resetMessage } = socialMediaSlice.actions
export default socialMediaSlice.reducer