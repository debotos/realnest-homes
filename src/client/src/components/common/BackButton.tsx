import React from 'react'
import { Button } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

import vars from '@config/vars'
import { routeHistory } from '@app/App'

const { primaryColor } = vars

function BackButton() {
	return (
		<Button
			className='back-btn'
			style={{ color: primaryColor, borderColor: primaryColor }}
			type='default'
			icon={<LeftOutlined />}
			onClick={() => routeHistory.goBack()}
		/>
	)
}

export default React.memo(BackButton)
