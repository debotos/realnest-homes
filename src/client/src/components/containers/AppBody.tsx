import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AnimatedSwitch, spring } from 'react-router-transition'

import getRoutes from '@app/routes'
import ScrollToTop from '../utility/ScrollToTop'
import PublicRoute from '../utility/PublicRoute'
import ProtectedRoute from '../utility/ProtectedRoute'

// wrap the `spring` helper to use a bouncy config
const mapStyles = (styles: any) => ({ opacity: styles.opacity })
const bounce = (val: any) => spring(val, { stiffness: 330, damping: 22 })
const routeTransition = { atEnter: { opacity: 0 }, atLeave: { opacity: bounce(0) }, atActive: { opacity: bounce(1) } }

function AppBody() {
	const routes = getRoutes()

	return (
		<>
			<ScrollToTop>
				<AnimatedSwitch
					atEnter={routeTransition.atEnter}
					atLeave={routeTransition.atLeave}
					atActive={routeTransition.atActive}
					mapStyles={mapStyles}
					className='app-route-wrapper'
				>
					{routes.map((route: any, idx: number) => {
						if (!route.component) return null
						if (route.protected === true)
							return <ProtectedRoute key={idx} path={route.path} exact={route.exact} component={route.component} />

						if (route.protected === false)
							return <PublicRoute key={idx} path={route.path} exact={route.exact} component={route.component} />

						return <Route key={idx} path={route.path} exact={route.exact} render={(props) => <route.component {...props} />} />
					})}
					<Redirect from='/' to='/home' />
				</AnimatedSwitch>
			</ScrollToTop>
		</>
	)
}

export default AppBody
