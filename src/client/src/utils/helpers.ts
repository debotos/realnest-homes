import _ from 'lodash'

export const getContainer = (node: any, property: string = 'parentElement'): HTMLElement => node[property] ?? document.body
export const sortByIndex = (array: any[] = []) => array.sort((a, b) => a.index - b.index)
export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
export const truncate = (input: string = '', length: number = 5) => (input.length > length ? `${input.substring(0, length)}...` : input)
export const capitalize = (string: string = '') => (string ? string.trim().charAt(0).toUpperCase() + string.trim().slice(1) : '')
export const filterOption = (input: any, option: any) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0

export const isEmpty = (value: any) =>
	value === undefined ||
	value === 'undefined' ||
	value === null ||
	value === 'null' ||
	(typeof value === 'object' && Object.keys(value).length === 0) ||
	(typeof value === 'string' && value.trim().length === 0)

export const getBase64 = (file: any) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => resolve(reader.result)
		reader.onerror = (error) => reject(error)
	})
}

/**
 * Get all the URL parameters
 * @param  {String} search  By default window.location.search
 * @return {Object}         The URL parameters
 */
export const getAllQueryVariables = (search?: string): Record<string, any> => {
	search = search ? search : window.location.search
	const params: any = new URLSearchParams(search)
	let paramObj: any = {}
	for (var value of params.keys()) {
		paramObj[value] = params.get(value)
	}
	// console.log('Query variables: ', paramObj)
	return paramObj
}

const NUMBER_FORMAT = Intl.NumberFormat()
export const toDigit = (value: number | string) => NUMBER_FORMAT.format(Number(value))

export const removeUndefined = (obj: Record<string, any>) => _(obj).omitBy(_.isUndefined).value()
const isEmptyObject = _.overEvery(_.isObject, _.isEmpty)
export const removeEmptyObj = (obj: any): any => {
	return _.isArray(obj)
		? _.reject(_.map(obj, removeEmptyObj), isEmptyObject)
		: _.isObject(obj)
		? _.omitBy(_.mapValues(obj, removeEmptyObj), isEmptyObject)
		: obj
}
export const removeUndefinedValue = (obj: any): any => {
	return _.isArray(obj)
		? _.reject(_.map(obj, removeUndefinedValue), _.isUndefined)
		: _.isObject(obj)
		? _.omitBy(_.mapValues(obj, removeUndefinedValue), _.isUndefined)
		: obj
}
export const clean = (obj: any): any => removeEmptyObj(removeUndefinedValue(obj))
