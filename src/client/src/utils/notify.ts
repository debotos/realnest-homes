import { notification } from 'antd'

export const notifyError = (msg: string, title?: string, duration?: number) => {
	notification.error({
		message: title ? title : 'ACTION FAILED',
		description: msg,
		placement: 'topRight',
		duration: duration ? duration : 3.5,
	})
}

export const notifySuccess = (msg: string) => {
	notification.success({ message: `ACTION SUCCESSFUL`, description: msg, placement: 'topRight' })
}

export const notifyInfo = (msg: string, title = `Please Check!`) => {
	notification.info({ message: title, description: msg, placement: 'topRight', duration: 10 })
}
