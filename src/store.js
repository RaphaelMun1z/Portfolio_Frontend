import { configureStore } from '@reduxjs/toolkit'

import authReducer from './slices/authSlice'
import projectReducer from './slices/projectSlice'
import languageReducer from './slices/languageSlice'
import frameworkReducer from './slices/frameworkSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        project: projectReducer,
        language: languageReducer,
        framework: frameworkReducer,
    },
})