import React from 'react'
import FadeIn from 'react-fade-in'
import { Skeleton, Spin } from 'antd'
import styled from 'styled-components'

import LoadingWhiteSVG from '@assets/loading_white.svg'
import LoadingSVG from '@assets/loading.svg'
import Logo from '@assets/logo.jpeg'

type LoadingProps = {
	msg?: string
	msgColor?: string
	opacity?: number
	spin?: boolean
	size?: 'small' | 'large' | 'default' | undefined // antd spin size
	bgColor?: string
	containerStyle?: any
	whiteSVG?: boolean
	transparentBG?: boolean
}

/* Just a SVG animated image */
export default function Loading({ msg, msgColor, containerStyle, whiteSVG = false }: LoadingProps) {
	return (
		<div style={{ marginTop: 100, textAlign: 'center', userSelect: 'none', pointerEvents: 'none', ...containerStyle }}>
			<img src={whiteSVG ? LoadingWhiteSVG : LoadingSVG} alt='Loading...' />
			<p
				style={{
					textAlign: 'center',
					fontWeight: 'bold',
					fontSize: '15px',
					opacity: 0.8,
					margin: '15px 0',
					marginLeft: 10,
					color: msgColor && msgColor,
				}}
			>
				{msg}
			</p>
		</div>
	)
}

const fullScreenStyles: any = {
	position: 'fixed',
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
	height: '100vh',
	width: '100vw',
	overflow: 'hidden',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}

/* props can be -> color, msg, msgColor, opacity */
export function LoadingCenter(props: LoadingProps) {
	const { containerStyle = {}, transparentBG = false } = props
	return (
		<FadeIn>
			<div
				style={{
					...fullScreenStyles,
					backgroundColor: props.bgColor ? props.bgColor : transparentBG ? 'transparent' : '#fff',
					zIndex: 1,
				}}
			>
				{props.spin ? <Spin size={props.size} /> : <Loading {...props} containerStyle={{ marginTop: 0, ...containerStyle }} />}
			</div>
		</FadeIn>
	)
}

/* props can be -> color, msg, msgColor, opacity */
export function LoadingOverlay(props: LoadingProps) {
	const { containerStyle = {} } = props
	return (
		<div
			style={{
				...fullScreenStyles,
				backgroundColor: `rgba(0, 0, 0, ${props.opacity ? props.opacity : 0.6})`,
				zIndex: 999999 /* Above everything */,
			}}
		>
			<Loading whiteSVG={true} msgColor='#fff' {...props} containerStyle={{ marginTop: 0, ...containerStyle }} />
		</div>
	)
}

/* props can be -> color, msg, msgColor, opacity */
export function SplashScreen(props: LoadingProps) {
	return (
		<SplashScreenContainer>
			<div>
				<div>
					<img src={Logo} alt='RealnestHomes' width='200' style={{ textAlign: 'center', userSelect: 'none', pointerEvents: 'none' }} />
				</div>
				<Loading {...props} containerStyle={{ marginTop: 15 }} />
			</div>
		</SplashScreenContainer>
	)
}

const SplashScreenContainer = styled.div`
	background-color: #fff;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 9999;
`

export function LoadingSkeleton({ number = 1, ...rest }) {
	return (
		<>
			{Array(number)
				.fill(0)
				.map((item, index) => (
					<Skeleton active key={index} {...rest} />
				))}
		</>
	)
}
