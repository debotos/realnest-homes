const tradeActivity = (sequelize, DataTypes) => {
	const TradeActivity = sequelize.define('tradeActivity', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		sequence: {
			/* ["UUID_of_trade1", "UUID_of_trade2"] */
			type: DataTypes.ARRAY(DataTypes.UUID),
			allowNull: false,
			validate: {
				notEmpty: { args: true, msg: 'List of trade is required.' },
			},
		},
	})

	return TradeActivity
}

module.exports = tradeActivity
