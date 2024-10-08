import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import projectImageService from "../services/projectImageService";

const initialState = {
    images: [],
    image: null,
    error: false,
    success: false,
    loading: false,
}

// Create a image
export const createProjectImage = createAsyncThunk(
    "image/create",
    async (image, thunkAPI) => {

        const token = thunkAPI.getState().auth.user.token
        const data = await projectImageService.createProjectImage(image, token)

        // Check for errors
        if (data.error) {
            return thunkAPI.rejectWithValue(data.error)
        }

        return data
    }
)

export const getProjectImagesById = createAsyncThunk(
    "image/getimage",
    async (id) => {
        const data = await projectImageService.getProjectImagesById(id)

        return data
    }
)

// Delete a project image
export const deleteProjectImage = createAsyncThunk(
    "image/delete",
    async (id, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token

        const data = await projectImageService.deleteProjectImage(id, token)

        // Check for errors
        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0])
        }

        return data
    }
)

export const projectImageSlice = createSlice({
    name: "image",
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
            .addCase(createProjectImage.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(createProjectImage.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.image = action.payload
                state.message = "Imagem cadastrada com sucesso!"
            })
            .addCase(createProjectImage.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.image = {}
            })
            .addCase(getProjectImagesById.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(getProjectImagesById.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.images = action.payload
            })
            .addCase(deleteProjectImage.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(deleteProjectImage.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.images = state.images.filter((image) => {
                    return image.id !== action.payload.id
                })
                state.message = action.payload.message
            })
            .addCase(deleteProjectImage.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.image = {}
            })
    },
})

export const { resetMessage } = projectImageSlice.actions
export default projectImageSlice.reducer