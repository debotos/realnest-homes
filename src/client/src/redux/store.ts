import { configureStore, combineReducers } from '@reduxjs/toolkit'

import settingsSlice from './slices/settingsSlice'
import authSlice from './slices/authSlice'

const rootReducer = combineReducers({
	settings: settingsSlice,
	auth: authSlice,
})

export const store = configureStore({ reducer: rootReducer })
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
