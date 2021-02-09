const trade = (sequelize, DataTypes) => {
	const Trade = sequelize.define('trade', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [3, 200], msg: 'Name length min: 3 and max: 200' },
				notEmpty: { args: true, msg: 'Name is required.' },
			},
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
	})

	return Trade
}

module.exports = trade
