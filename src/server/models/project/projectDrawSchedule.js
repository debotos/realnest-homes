const projectDrawSchedule = (sequelize, DataTypes) => {
	const ProjectDrawSchedule = sequelize.define('projectDrawSchedule', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		labor_cost: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false,
			validate: {
				isDecimal: { args: true, msg: 'Labor cost should be decimal.' },
				notEmpty: { args: true, msg: 'Labor cost is required.' },
			},
		},
		material_cost: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false,
			validate: {
				isDecimal: { args: true, msg: 'Material cost should be decimal.' },
				notEmpty: { args: true, msg: 'Material cost is required.' },
			},
		},
		schedule_draw_date: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			validate: {
				notEmpty: { args: true, msg: 'Schedule draw date is required.' },
			},
		},
		draw_status: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
	})

	ProjectDrawSchedule.associate = (models) => {
		ProjectDrawSchedule.belongsTo(models.Project)
		ProjectDrawSchedule.belongsTo(models.DrawSchedule)
		ProjectDrawSchedule.belongsTo(models.TradeActivity)
	}

	return ProjectDrawSchedule
}

module.exports = projectDrawSchedule
