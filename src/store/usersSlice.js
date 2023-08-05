import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        inputValue: '',
        resultCalc: '',
    },
    reducers: {
        changeInput: (state, action) => {
            state.inputValue = action.payload
        },
        addUser: (state, action) => {
            state.users = [...state.users, action.payload]
        },
        clearInput: (state) => {
            state.inputValue = '';
        },
        deleteAll: (state) => {
            state.users = [];
        },
        result: (state, action) => {
            state.resultCalc = action.payload;
        }
    },
})


export const { changeInput, addUser, clearInput, deleteAll, result } = usersSlice.actions

export default usersSlice.reducer