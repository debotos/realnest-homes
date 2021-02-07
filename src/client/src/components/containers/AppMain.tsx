import React from 'react'
import Axios from 'axios'
import { Layout } from 'antd'
import jwt_decode from 'jwt-decode'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import vars from '@config/vars'
import keys from '@config/keys'
import AppFooter from '../common/Footer'
import handleError from '@utils/handleError'
import setAuthToken from '@utils/setAuthToken'
import AppHeader from '@components/common/Header'
import { RootState, AppDispatch } from '@redux/store'
import { setCurrentUser } from '@redux/slices/authSlice'
import { setSettings } from '@redux/slices/settingsSlice'
import { SplashScreen } from '@components/loading/Loading'
import SideNavigation from '@components/sideNavigation/SideNavigation'
import Login from '@pages/login/Login'

const { JWT } = vars
const { API_METHODS } = keys

function AppMain({ children }: any) {
	const dispatch: AppDispatch = useDispatch()
	const { isAuthenticated } = useSelector((state: RootState) => state.auth)
	const [loading, setLoading] = React.useState(true)

	React.useEffect(() => {
		bootstrapApp()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const bootstrapApp = async () => {
		try {
			setLoading(true)
			const res = await Axios.get(API_METHODS.settings)
			const settings = res.data
			console.log(`'${API_METHODS.settings}' response -> `, settings)
			/* Save settings to Redux */
			dispatch(setSettings(settings))

			/* Check for jwt & user data */
			const jwt = localStorage.getItem(JWT)
			if (!jwt) return

			// Decode token and get user info and exp
			const user: Record<string, any> = jwt_decode(jwt)
			// Check for expired token
			const currentTime = Date.now() / 1000
			if (user.exp < currentTime) return
			// Set user and isAuthenticated = true
			dispatch(setCurrentUser(user))
			/* Set 'Authentication' Header to Axios */
			setAuthToken(jwt)
		} catch (error) {
			handleError(error, 'AppMain.tsx')
		} finally {
			setLoading(false)
		}
	}

	if (loading) return <SplashScreen msg='Application loading...' />

	if (!isAuthenticated) return <Login />

	return (
		<>
			<Layout>
				<SideNavigation />
				<Layout>
					<AppHeader />
					<AppContent>{children}</AppContent>
					<AppFooter />
				</Layout>
			</Layout>
		</>
	)
}

export default AppMain

const AppContent = styled(Layout.Content)`
	background-color: #f0f2f5;
	margin: 0 24px;
	margin-top: 84px; // Header Height 64px + 20px;
`
