const drawSchedule = (sequelize, DataTypes) => {
	const DrawSchedule = sequelize.define('drawSchedule', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		draw_number: {
			type: DataTypes.INTEGER,
			unique: { args: true, msg: 'Draw number already exist.' },
			allowNull: false,
			validate: {
				notEmpty: { args: true, msg: 'Draw number is required.' },
			},
		},
	})

	DrawSchedule.associate = (models) => {
		DrawSchedule.belongsTo(models.TradeActivity)
	}

	return DrawSchedule
}

module.exports = drawSchedule
