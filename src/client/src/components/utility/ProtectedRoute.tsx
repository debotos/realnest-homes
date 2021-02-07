import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import links from '@app/links'
import { RootState } from '@redux/store'

const ProtectedRoute = ({ component: Component, ...rest }: any) => {
	const { isAuthenticated } = useSelector((state: RootState) => state.auth)

	return <Route {...rest} render={(props) => (isAuthenticated === true ? <Component {...props} /> : <Redirect to={links.login.to} />)} />
}

export default ProtectedRoute
