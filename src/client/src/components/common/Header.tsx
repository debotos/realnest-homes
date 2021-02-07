import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { LogoutOutlined } from '@ant-design/icons'
import { Row, Layout, Col, Button, Typography } from 'antd'

import { RootState, AppDispatch } from '@redux/store'
import { logoutUser } from '@redux/slices/authSlice'

function AppHeader() {
	const dispatch: AppDispatch = useDispatch()
	const { app_name, sideNav } = useSelector((state: RootState) => state.settings)
	const { isAuthenticated } = useSelector((state: RootState) => state.auth)

	const handleLogout = () => dispatch(logoutUser())

	return (
		<Container sidebar={sideNav.toString()}>
			<Row justify='space-between' align='middle' className='h-100'>
				<Col flex={1}>
					<Typography.Title className='m-0' level={3}>
						{app_name}
					</Typography.Title>
				</Col>
				<Col>
					{isAuthenticated && (
						<Button icon={<LogoutOutlined />} danger onClick={handleLogout}>
							Logout
						</Button>
					)}
				</Col>
			</Row>
		</Container>
	)
}

export default React.memo(AppHeader)

const Container: any = styled(Layout.Header)`
	background-color: #fff;
	padding: 0 20px;
	position: fixed;
	width: ${(props: any) => (props.sidebar === 'true' ? `calc(100% - 200px)` : '100%')}; // 200px default sidebar width
	z-index: 2;
`
