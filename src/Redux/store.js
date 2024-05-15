import { configureStore } from '@reduxjs/toolkit'
import useReducer from './resumeSlice'
import userReducer from './userSlice' 

export default configureStore({
    reducer: {
        resume: useReducer,
        user: userReducer, 
    }
})