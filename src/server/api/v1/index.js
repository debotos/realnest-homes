const express = require('express')

const router = express.Router()

const user = require('./user')

router.get('/', (req, res) => {
	res.json({ message: '👋  - Realnest Homes v1 API' })
})

router.get('/settings', (req, res) => {
	res.json({
		app_name: 'Realnest Homes',
		app_website: 'www.realnesthomes.com',
		app_url: 'https://www.realnesthomes.com',
		app_logo: 'https://realnest-homes.herokuapp.com/realnest-homes.jpeg',
	})
})

router.use('/user', user)

module.exports = router
