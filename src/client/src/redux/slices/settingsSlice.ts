import { createSlice } from '@reduxjs/toolkit'

interface SliceState extends Record<string, any> {
	sideNav: boolean
}

const initialState: SliceState = {
	sideNav: true,
}

/* Store overall app UI settings */
const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setSettings(settings, { payload }) {
			return { ...settings, ...payload }
		},
	},
})

export const { setSettings } = settingsSlice.actions

export default settingsSlice.reducer
