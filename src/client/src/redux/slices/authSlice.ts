import { createSlice } from '@reduxjs/toolkit'

import vars from '@config/vars'
import { isEmpty } from '@utils/helpers'
import setAuthToken from '@utils/setAuthToken'

const { JWT } = vars

type SliceState = { isAuthenticated: boolean; user: any }

const initialState: SliceState = { isAuthenticated: false, user: null }

/* Store auth state */
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCurrentUser(state, { payload }) {
			return { ...state, isAuthenticated: !isEmpty(payload), user: payload }
		},
		logoutUser() {
			localStorage.removeItem(JWT)
			setAuthToken() /* Clear 'Authentication' Header to Axios */
			return { ...initialState }
		},
	},
})

export const { setCurrentUser, logoutUser } = authSlice.actions

export default authSlice.reducer
