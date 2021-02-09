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
	List: sequelize.import('./list'),
	ListInput: sequelize.import('./list/listInput'),
	Contractor: sequelize.import('./contractor'),
	DrawSchedule: sequelize.import('./drawSchedule'),
	Material: sequelize.import('./material'),
	Trade: sequelize.import('./trade'),
	TradeActivity: sequelize.import('./tradeActivity'),
	Vendor: sequelize.import('./vendor'),
	Project: sequelize.import('./project'),
	ProjectActivitySchedule: sequelize.import('./project/projectActivitySchedule'),
	Comment: sequelize.import('./project/comment'),
	ProjectDrawSchedule: sequelize.import('./project/projectDrawSchedule'),
	ProjectMaterial: sequelize.import('./project/projectMaterial'),
	ProjectExpense: sequelize.import('./project/projectExpense'),
}

Object.keys(models).forEach((key) => {
	if ('associate' in models[key]) {
		models[key].associate(models)
	}
})

module.exports = { models, sequelize }
