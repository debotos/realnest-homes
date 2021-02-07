import { notifyError } from './notify'
/* Detail Error Log of AJAX req */

const handleError = (error: any, filename?: string) => {
	let msg
	if (filename) {
		console.log(`AJAX Req Error in ${filename}`)
	} else {
		console.log('AJAX Req Error')
	}
	console.log('======================Error Info==========================')
	if (error.response) {
		const { data, status, headers } = error.response
		// The request was made and the server responded with a status code
		// that falls out of the range of 2xx
		console.log('Error Data: \n', data)
		console.log('Error Status: \n', status)
		console.log('Error Headers: \n', headers)

		if (data) {
			const { message } = data
			if (data) {
				msg = message
			}
		}
	} else if (error.request) {
		// The request was made but no response was received
		// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
		// http.ClientRequest in node.js
		console.log('Error: no response was received\n------------------\n', error.request)
		msg = 'Something went wrong. Please try again!'
	} else {
		// Something happened in setting up the request that triggered an Error
		console.log('Error: setting up the request\n-------------------\n', error.message)
		msg = error.message
	}
	console.log('Error Config:\n-----------------\n', error.config)
	console.log('=====================End Error Info=======================')

	msg = msg ? msg.replace('SequelizeValidationError: ', '').replace('Validation error: ', '') : 'Sorry, unable to process right now.'

	notifyError(msg, 'ERROR')

	return msg
}

export default handleError
