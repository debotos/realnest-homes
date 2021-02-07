import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { Affix, Layout, Menu, Row } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

import links from '@app/links'
import Logo from '@assets/logo.jpeg'
import { routeHistory } from '@app/App'
import { RootState, AppDispatch } from '@redux/store'
import { setSettings } from '@redux/slices/settingsSlice'

const { home, masterData, projects, schedules } = links
const menuItems = [home, projects, schedules, masterData]

function SideNavigation() {
	const dispatch: AppDispatch = useDispatch()
	const { pathname } = useLocation()
	const { app_logo, app_name } = useSelector((state: RootState) => state.settings)

	return (
		<Affix offsetTop={0}>
			<Layout.Sider
				theme='light'
				breakpoint='lg'
				collapsedWidth='0'
				onCollapse={(collapsed, type) => {
					console.log('Sidebar changed: ', { collapsed, type })
					dispatch(setSettings({ sideNav: !collapsed }))
				}}
				style={{ zIndex: 9, minHeight: '100vh' }}
			>
				<Row justify='center' align='middle' style={{ height: 64 }}>
					<AppLogo src={app_logo || Logo} alt={app_name} width='70' onClick={() => routeHistory.push('/')} />
				</Row>
				<Menu theme='light' mode='inline' selectedKeys={['/' + pathname.split('/')[1]]}>
					{menuItems.map((item) => {
						return (
							<Menu.Item key={item.to} icon={item.icon} onClick={() => routeHistory.push(item.to)}>
								{item.label}
							</Menu.Item>
						)
					})}
				</Menu>
			</Layout.Sider>
		</Affix>
	)
}

export default SideNavigation

const AppLogo = styled.img`
	cursor: pointer;
	user-select: none;
	margin: 5px;
	object-fit: contain;
`
