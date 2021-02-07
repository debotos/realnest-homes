const app = require('./src/server')
const { sequelize } = require('./src/server/models')

// Logging production environment variable, Just to debug
if (process.env.NODE_ENV === 'production') {
	console.log('Environment Variables: \n', process.env)
}

const port = process.env.PORT || 5000
const eraseDatabaseOnSync = false && process.env.NODE_ENV !== 'production'

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
	app.listen(port, () => console.log(` 🚀  Server started on port ${port} 🌎 `))
})
