const _ = require('lodash')
const router = require('express').Router()
const jwt = require('jsonwebtoken')

const { models } = require('../../models')
const auth = require('../../middleware/auth')
const { jwtPrivateKey, jwtTimeout } = require('../../config/credentials')

// @route   GET api/${version}/user/me
// @desc    Return current user
// @access  Private
// Set Header { key: Authentication, value: token }
router.get('/me', auth, async (req, res) => {
	const user = await models.User.findById(req.user.id).select('-password')
	if (user) {
		return res.send(user)
	} else {
		return res.status(400).send('Not logged in!')
	}
})

// @route   GET api/${version}/user/login
// @desc    Returning User & JWT Token
// @access  Public
router.post('/login', async (req, res) => {
	const { login } = req.body
	console.log(req.body)
	const user = await models.User.findByLogin(login)

	if (!user) return res.status(404).json({ message: 'Invalid credentials.' })

	const isValid = await user.validatePassword(password)

	if (!isValid) return res.status(401).json({ message: 'Invalid credentials.' })

	const data = _.omit(user, 'password')
	const token = createToken(user, jwtSecret, expiresTime)

	return res.json({ user: data, token })
})

async function createToken(data) {
	return await jwt.sign(data, jwtPrivateKey, { expiresIn: jwtTimeout })
}

module.exports = router
