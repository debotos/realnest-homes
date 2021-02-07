import React from 'react'
import { Row, Image } from 'antd'
import styled from 'styled-components'

import vars from '@config/vars'
import FallbackImage from '@assets/fallback.png'

interface CProps {
	url: string
	alt?: string
	preview?: boolean
	width?: string | number
	onClick?: () => void
	fit?: string
}

const placeholderImage = (
	<Row style={{ background: vars.imageBGColor, width: '100%', height: '150px' }} justify='center' align='middle'>
		<Image preview={false} src={require('@assets/downloading.svg')} width={40} height={40} />
	</Row>
)

function AppImage(props: CProps) {
	const { url, preview = false, width = '100%', onClick, fit, alt = '' } = props
	return (
		<Container onClick={onClick} fit={fit}>
			<Image alt={alt} preview={preview} width={width} src={url} fallback={FallbackImage} placeholder={placeholderImage} />
		</Container>
	)
}

export default React.memo(AppImage)

const Container: any = styled.div`
	border-radius: 3px;
	height: ${vars.imageHeight + 'px'};
	width: 100%;
	position: relative;
	cursor: pointer;
	&:hover {
		box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
	}
	.ant-image {
		height: 100%;
		.ant-image-img {
			height: 100%;
			object-fit: ${(props: any) => (props.fit ? props.fit : 'cover')};
		}
	}
`
