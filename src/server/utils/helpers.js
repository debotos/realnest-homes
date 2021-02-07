function handleGeneralError(error) {
	if (error.name === 'SequelizeValidationError') {
		return error.errors.map((e) => e.message)
	} else {
		return error.message
	}
}

const isEmpty = (value) =>
	value === undefined ||
	value === 'undefined' ||
	value === null ||
	value === 'null' ||
	(typeof value === 'object' && Object.keys(value).length === 0) ||
	(typeof value === 'string' && value.trim().length === 0)

module.exports = { isEmpty, handleGeneralError }
