import React from 'react'
import { Row, Button, Modal } from 'antd'

import vars from '@config/vars'
import { capitalize } from '@utils/helpers'

const { primaryColor } = vars

interface CProps {
	show: boolean
	title?: string
	msg: string
	actionURL?: string
	actionTitle?: string
	showCloseBtn?: boolean
	onClose: () => void
	freeze?: boolean
	children?: any
}

function Alert(props: CProps) {
	const { children, show, title, msg, actionURL, actionTitle, showCloseBtn, freeze, onClose } = props

	return (
		<Modal visible={show} title={title} footer={null} onCancel={onClose} closable={!freeze} maskClosable={!freeze}>
			<p style={{ textAlign: 'center', fontSize: '14px', fontWeight: 500 }}>{capitalize(msg)}</p>
			{children}
			{actionURL && (
				<Row justify='center' style={{ marginTop: 20 }}>
					<Button type='primary' onClick={() => window.open(actionURL, '_blank')}>
						{actionTitle}
					</Button>
				</Row>
			)}
			{showCloseBtn && (
				<Row justify='center' style={{ marginTop: 20 }}>
					<Button autoFocus type='default' onClick={onClose} style={{ color: primaryColor, borderColor: primaryColor }}>
						Close
					</Button>
				</Row>
			)}
		</Modal>
	)
}

/* Use it as a component where auto(redux based) alert not appropriate */
function AppAlertComponent(props: CProps) {
	const { children, show, title = 'Error', msg, actionURL, actionTitle = 'Action', showCloseBtn = true, freeze = false, onClose } = props

	return (
		<Alert
			children={children}
			show={show}
			title={title}
			msg={msg}
			actionURL={actionURL}
			actionTitle={actionTitle}
			showCloseBtn={showCloseBtn}
			freeze={freeze}
			onClose={onClose}
		/>
	)
}

export const AlertComponent = React.memo(AppAlertComponent)
