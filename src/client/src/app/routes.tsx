import React from 'react'
import loadable from '@loadable/component'

import links from './links'
import { LoadingOverlay } from '../components/loading/Loading'

type RouteName = keyof typeof links

const loadableOptions = { fallback: <LoadingOverlay msg='Component loading...' isTransparent={true} /> }
const get = (key: RouteName) => links[key].to

// Code splitting
const Home = loadable(() => import('../pages/home/Home'), loadableOptions)
const Login = loadable(() => import('../pages/login/Login'), loadableOptions)
const Projects = loadable(() => import('../pages/projects/Projects'), loadableOptions)
const Schedules = loadable(() => import('../pages/schedules/Schedules'), loadableOptions)
const MasterData = loadable(() => import('../pages/masterData/MasterData'), loadableOptions)

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
	{ path: get('projects'), exact: true, protected: true, component: Projects },
	{ path: get('schedules'), exact: true, protected: true, component: Schedules },
	{ path: get('masterData'), exact: true, protected: true, component: MasterData },
]

export default getRoutes
