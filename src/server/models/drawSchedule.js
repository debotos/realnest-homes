const drawSchedule = (sequelize, DataTypes) => {
	const DrawSchedule = sequelize.define('drawSchedule', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
	})

	DrawSchedule.associate = (models) => {
		DrawSchedule.hasOne(models.Trade)
		DrawSchedule.hasOne(models.TradeActivity)
	}

	return DrawSchedule
}

module.exports = drawSchedule
