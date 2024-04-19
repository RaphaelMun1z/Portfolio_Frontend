import { configureStore } from '@reduxjs/toolkit'

import authReducer from './slices/authSlice'
import projectReducer from './slices/projectSlice'
import languageReducer from './slices/languageSlice'
import frameworkReducer from './slices/frameworkSlice'
import databaseReducer from './slices/databaseSlice'
import toolReducer from './slices/toolSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        project: projectReducer,
        language: languageReducer,
        framework: frameworkReducer,
        database: databaseReducer,
        tool: toolReducer,
    },
})