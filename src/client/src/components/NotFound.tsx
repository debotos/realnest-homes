import React from 'react'
import { Result, Button, Row } from 'antd'

import { routeHistory } from '../app/App'

interface CProps {
	info?: string
}

const NotFound = (props: CProps) => {
	const { info = `Sorry, the page you're looking for does not exist.` } = props
	return (
		<Row justify='center' align='middle' style={{ minHeight: '100vh' }}>
			<Result
				status='404'
				title='404'
				subTitle={info}
				extra={
					<Button type='dashed' onClick={() => routeHistory.goBack()}>
						<b>Go Back</b>
					</Button>
				}
			/>
		</Row>
	)
}

export default React.memo(NotFound)
