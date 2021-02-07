const { Sequelize } = require('sequelize')

const { postgresDB, postgresUser, postgresPassword, postgresURL } = require('../config/credentials')

let sequelize

if (postgresURL && process.env.NODE_ENV === 'production') {
	sequelize = new Sequelize(postgresURL, { dialect: 'postgres' })
} else {
	sequelize = new Sequelize(postgresDB, postgresUser, postgresPassword, { dialect: 'postgres', logging: false })
}

const models = {
	User: sequelize.import('./user'),
}

Object.keys(models).forEach((key) => {
	if ('associate' in models[key]) {
		models[key].associate(models)
	}
})

module.exports = { models, sequelize }
