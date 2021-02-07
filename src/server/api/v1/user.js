const _ = require('lodash')
const router = require('express').Router()
const jwt = require('jsonwebtoken')

const { models } = require('../../models')
const auth = require('../../middleware/auth')
const { jwtPrivateKey, jwtTimeout } = require('../../config/credentials')
const { handleGeneralError, isEmpty } = require('../../utils/helpers')

// @route   GET api/v1/user/me
// @desc    Return current user
// @access  Private
// Set Header { key: Authentication, value: token }
router.get('/me', auth, async (req, res) => {
	const user = await models.User.findByPk(req.user.id)
	if (user) {
		return res.send(_.omit(user, 'password'))
	} else {
		return res.status(400).send('Not logged in!')
	}
})

// @route   GET api/v1/user/login
// @desc    Returning User & JWT Token
// @access  Public
router.post('/login', async (req, res) => {
	try {
		const { login, password } = req.body
		if (isEmpty(req.body)) return res.status(400).json({ message: 'Missing required fields.' })

		const user = await models.User.findByLogin(login)
		if (!user) return res.status(404).json({ message: 'Invalid credentials.' })

		const isValid = await user.validatePassword(password)
		if (!isValid) return res.status(401).json({ message: 'Invalid credentials.' })

		const data = _.omit(user.get({ plain: true }), 'password')
		const token = await createToken(data)

		return res.json({ token })
	} catch (error) {
		const message = handleGeneralError(error)
		return res.status(400).json({ message })
	}
})

// @route   POST api/v1/user/register
// @desc    Register user
// @access  Public
router.post('/register', async (req, res) => {
	try {
		if (isEmpty(req.body)) return res.status(400).json({ message: 'Missing required fields.' })
		const user = (await models.User.create(req.body)).get({ plain: true })
		const data = _.omit(user, 'password')
		const token = await createToken(data)
		return res.json({ token })
	} catch (error) {
		const message = handleGeneralError(error)
		return res.status(400).json({ message })
	}
})

async function createToken(data) {
	const token = await jwt.sign(data, jwtPrivateKey, { expiresIn: jwtTimeout })
	return token
}

module.exports = router
