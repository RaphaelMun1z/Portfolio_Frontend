import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import interpersonalSkillService from "../services/interpersonalSkillService";

const initialState = {
    interpersonalSkills: [],
    interpersonalSkill: null,
    error: false,
    success: false,
    loading: false,
}

// Create a interpersonal skill
export const createInterpersonalSkill = createAsyncThunk(
    "interpersonalSkill/create",
    async (interpersonalSkill, thunkAPI) => {

        const token = thunkAPI.getState().auth.user.token
        const data = await interpersonalSkillService.createInterpersonalSkill(interpersonalSkill, token)

        // Check for errors
        if (data.error) {
            return thunkAPI.rejectWithValue(data.error)
        }

        return data
    }
)

// Get interpersonal skills
export const getInterpersonalSkills = createAsyncThunk(
    "interpersonalSkill/getinterpersonalskills",
    async () => {
        const data = await interpersonalSkillService.getInterpersonalSkills()

        return data
    }
)

export const interpersonalSkillSlice = createSlice({
    name: "interpersonalSkill",
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
            .addCase(createInterpersonalSkill.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(createInterpersonalSkill.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.interpersonalSkill = action.payload
                state.message = "Habilidade interpessoal cadastrada com sucesso!"
            })
            .addCase(createInterpersonalSkill.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.interpersonalSkill = {}
            })
            .addCase(getInterpersonalSkills.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(getInterpersonalSkills.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.interpersonalSkills = action.payload
            })
    },
})

export const { resetMessage } = interpersonalSkillSlice.actions
export default interpersonalSkillSlice.reducer