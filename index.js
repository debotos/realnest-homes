const app = require('./src/server')
const { sequelize, models } = require('./src/server/models')

const seedDB = require('./src/server/utils/seedDB')

// Logging production environment variable, Just to debug
if (process.env.NODE_ENV === 'production') {
	console.log('Environment Variables: \n', process.env)
}

const port = process.env.PORT || 5000
const eraseDatabaseOnSync = true && process.env.NODE_ENV !== 'production'

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
	if (eraseDatabaseOnSync) {
		seedDB(models) /* Generate dummy or initial data */
	}
	app.listen(port, () => console.log(` 🚀  Server started on port ${port} 🌎 `))
})
