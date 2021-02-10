require('express-async-errors')
const path = require('path')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')

const apiV1 = require('./api/v1')

const app = express()

app.use(cors())
app.use(helmet({ contentSecurityPolicy: false }))
app.use(morgan('tiny'))
app.use(compression())
app.use(express.json())

// Expose API
app.use('/api/v1', apiV1)

// Server client app in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static(path.join(__dirname, '../client/build')))
	app.get('*', (_, res) => {
		return res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'))
	})
}

module.exports = app
