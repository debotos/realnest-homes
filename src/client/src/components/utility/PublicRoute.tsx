import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import { RootState } from '@redux/store'

export const PublicRoute = ({ component: Component, ...rest }: any) => {
	const { isAuthenticated } = useSelector((state: RootState) => state.auth)
	return <Route {...rest} render={(props) => (isAuthenticated ? <Redirect to='/' /> : <Component {...props} />)} />
}

export default PublicRoute
