import { configureStore } from '@reduxjs/toolkit'

import authReducer from './slices/authSlice'
import projectReducer from './slices/projectSlice'
import languageReducer from './slices/languageSlice'
import frameworkReducer from './slices/frameworkSlice'
import databaseReducer from './slices/databaseSlice'
import toolReducer from './slices/toolSlice'
import interpersonalSkillReducer from './slices/interpersonalSkillsSlice'
import contactReducer from './slices/contactSlice'
import formSubjectReducer from './slices/formSubjectSlice'
import faqReducer from './slices/faqSlice'
import logReducer from './slices/logSlice'
import socialMediaReducer from './slices/socialMediaSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        project: projectReducer,
        language: languageReducer,
        framework: frameworkReducer,
        database: databaseReducer,
        tool: toolReducer,
        interpersonalSkill: interpersonalSkillReducer,
        contact: contactReducer,
        formSubject: formSubjectReducer,
        faq: faqReducer,
        log: logReducer,
        socialMedia: socialMediaReducer,
    },
})