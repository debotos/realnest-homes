import React from 'react'
import Axios from 'axios'
import jwt_decode from 'jwt-decode'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Form, Input, Button } from 'antd'
import { MailOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons'

import vars from '@config/vars'
import keys from '@config/keys'
import Logo from '@assets/logo.jpeg'
import handleError from '@utils/handleError'
import setAuthToken from '@utils/setAuthToken'
import { AppDispatch, RootState } from '@redux/store'
import { setCurrentUser } from '@redux/slices/authSlice'

const { JWT } = vars
const { API_METHODS } = keys

function Login() {
	const dispatch: AppDispatch = useDispatch()
	const _isMounted = React.useRef(false)
	const { app_logo, app_name } = useSelector((state: RootState) => state.settings)
	const [processing, setProcessing] = React.useState(false)

	React.useEffect(() => {
		_isMounted.current = true
		return () => {
			_isMounted.current = false
		}
	}, [])

	const onFinish = async (values: Record<string, string>) => {
		try {
			_isMounted.current && setProcessing(true)
			console.log(`'${API_METHODS.login}' PostData -> `, values)
			const res = await Axios.post(API_METHODS.login, values)
			console.log(`'${API_METHODS.login}' response -> `, res.data)
			let { token } = res.data
			localStorage.setItem(JWT, token)
			setAuthToken(token)
			dispatch(setCurrentUser(jwt_decode(token)))
		} catch (error) {
			handleError(error, 'Login.tsx')
		} finally {
			_isMounted.current && setProcessing(false)
		}
	}

	return (
		<Row align='middle' justify='center' style={{ height: '100vh', marginTop: '-20px' }}>
			<Col xs={22} sm={16} md={12} lg={8} xl={6} xxl={6}>
				<Row justify='center' style={{ marginBottom: 30 }}>
					<img
						src={app_logo || Logo}
						alt={app_name}
						width='100'
						style={{ textAlign: 'center', userSelect: 'none', pointerEvents: 'none' }}
					/>
				</Row>

				<Form name='login-form' onFinish={onFinish}>
					<Form.Item name='login' hasFeedback rules={[{ whitespace: true, required: true, message: 'Please input your username/email!' }]}>
						<Input prefix={<MailOutlined />} type='text' placeholder='Username' />
					</Form.Item>
					<Form.Item name='password' hasFeedback rules={[{ required: true, message: 'Please input your Password!' }]}>
						<Input.Password prefix={<LockOutlined />} type='password' placeholder='Password' />
					</Form.Item>

					<Form.Item style={{ textAlign: 'center', marginTop: 22 }}>
						<Button icon={<LoginOutlined />} type='primary' htmlType='submit' style={{ minWidth: 100 }} loading={processing}>
							Login
						</Button>
					</Form.Item>
				</Form>
			</Col>
		</Row>
	)
}

export default Login
