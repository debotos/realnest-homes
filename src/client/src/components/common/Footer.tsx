import React from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { RootState } from '@redux/store'

function AppFooter() {
	const { app_name } = useSelector((state: RootState) => state.settings)

	return (
		<Container>
			@ Copyright {new Date().getFullYear()} {app_name ? `| ${app_name}` : ''}
		</Container>
	)
}

export default React.memo(AppFooter)

const Container = styled(Layout.Footer)`
	text-align: center;
`
