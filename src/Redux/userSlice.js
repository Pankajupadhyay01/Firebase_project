import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'LogIn',
    initialState: {
        user_data: {},
        user: false,
        id: {}
    },
    reducers: {

        checkUser: (state, action) => {
            state.user = true
            state.user_data = action.payload
            console.log(state.user_data);
        },

        Logout: state => {
            state.user = false
        },

        userid: (state, actions) => {
            state.id = actions.payload
        }

    }
})

export const { checkUser, Logout, userid } = userSlice.actions
export default userSlice.reducer