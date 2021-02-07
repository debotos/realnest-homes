import React from 'react'
import loadable from '@loadable/component'

import links from './links'
import { LoadingCenter } from '../components/loading/Loading'

type RouteName = keyof typeof links

const loadableOptions = { fallback: <LoadingCenter msg='Component loading...' /> }
const get = (key: RouteName) => links[key].to

// Code splitting
const Home = loadable(() => import('../pages/home/Home'), loadableOptions)
const Login = loadable(() => import('../pages/login/Login'), loadableOptions)

/*
	protected: true  -> Page can be accessed only when authenticated
	protected: false -> Page can be accessed only when unauthenticated
	Don't pass 'protected' property if you want to access the page regardless of auth state
*/
const getRoutes = () => [
	// Common - Both Authenticate & Non-Authenticate User Can Access
	{ path: '/', exact: true },
	// { path: get('about'), exact: true, component: About },
	// Public - Only Non-Authenticate User Can Access
	{ path: get('login'), exact: true, protected: false, component: Login },
	// Private - Only Authenticate User Can Access
	{ path: get('home'), exact: true, protected: true, component: Home },
]

export default getRoutes
