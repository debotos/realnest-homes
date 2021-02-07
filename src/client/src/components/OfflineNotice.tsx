import React from 'react'
import styled from 'styled-components'
import { BiWifiOff } from 'react-icons/bi'

function OfflineNotice() {
	return (
		<Container>
			<OfflineIllustration title='Offline indicator' color='tomato' />
			<h3 style={{ marginTop: '1.5rem' }}>You're offline</h3>
			<Message>Please connect to the internet and try again</Message>
		</Container>
	)
}

export default React.memo(OfflineNotice)

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;
`

const OfflineIllustration = styled(BiWifiOff)`
	font-size: 10em;
	pointer-events: none;
`

const Message = styled.p`
	font-size: 1rem;
	font-weight: bold;
	opacity: 0.7;
	text-align: center;
`
