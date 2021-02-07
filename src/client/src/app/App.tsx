import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Offline, Online } from 'react-detect-offline'

import './App.less'
import store from '@redux/store'
import AppBody from '@components/containers/AppBody'
import AppMain from '@components/containers/AppMain'
import ErrorBoundary from '@components/ErrorBoundary'
import OfflineNotice from '@components/OfflineNotice'

export const routeHistory = createBrowserHistory()

function App() {
	return (
		<>
			{/* Online Content */}
			<Online>
				<ErrorBoundary>
					<Provider store={store}>
						<Router history={routeHistory}>
							<AppMain>
								<AppBody />
							</AppMain>
						</Router>
					</Provider>
				</ErrorBoundary>
			</Online>
			{/* Offline Content */}
			<Offline>
				<OfflineNotice />
			</Offline>
		</>
	)
}

export default App
