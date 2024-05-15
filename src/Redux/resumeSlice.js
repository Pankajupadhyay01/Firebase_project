import { createSlice } from '@reduxjs/toolkit'

const resumeSlice = createSlice({
    name: 'data',
    initialState: {
        data: [],
    },
    reducers: {
        validate: (state, action) => {
            state.data = action.payload 
            console.log(action.payload) ;
        },

    }
})

export const { validate } = resumeSlice.actions
export default resumeSlice.reducer