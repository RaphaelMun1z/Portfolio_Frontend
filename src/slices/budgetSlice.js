import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import budgetService from "../services/budgetService";

const initialState = {
    budgets: [],
    budget: null,
    error: false,
    success: false,
    loading: false,
}

// Create a budget
export const createBudget = createAsyncThunk(
    "budget/create",
    async (budget, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token
        const data = await budgetService.createBudget(budget, token)

        // Check for errors
        if (data.error) {
            return thunkAPI.rejectWithValue(data.error)
        }

        return data
    }
)

// Get budget
export const getBudgets = createAsyncThunk(
    "budget/getbudgets",
    async (_, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token
        const data = await budgetService.getBudgets(token)

        return data
    }
)

// Delete a budget
export const deleteBudget = createAsyncThunk(
    "budget/delete",
    async (id, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token

        const data = await budgetService.deleteBudget(id, token)

        // Check for errors
        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0])
        }

        return data
    }
)

export const budgetSlice = createSlice({
    name: "budget",
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
            .addCase(createBudget.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(createBudget.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.budget = action.payload
                state.message = "Orçamento cadastrado com sucesso!"
            })
            .addCase(createBudget.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.budget = {}
            })
            .addCase(getBudgets.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(getBudgets.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.budgets = action.payload
            })
            .addCase(deleteBudget.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(deleteBudget.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.budgets = state.budgets.filter((budget) => {
                    return budget.id !== action.payload.id
                })
                state.message = action.payload.message
            })
            .addCase(deleteBudget.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.budget = {}
            })
    },
})

export const { resetMessage } = budgetSlice.actions
export default budgetSlice.reducer