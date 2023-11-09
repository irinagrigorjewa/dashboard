import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
    token: undefined,
    loggedIn: false,
}

export const setMainAction = createAction('SET_MAIN_ACTION')
export const handleSuccessfulLogin = createAction('HANDLE_SUCCESSFUL_LOGIN')
export const logout = createAction('LOGOUT')


export const appReducer = createReducer(initialState, (builder) => {
    builder.addCase(setMainAction, () => {
        console.log(
            ''
        )
    })
    .addCase(handleSuccessfulLogin, (state) => {
        state.loggedIn = true
    })
    .addCase(logout, (state) => {
        state.loggedIn = false
    })
})