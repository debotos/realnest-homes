const projectActivitySchedule = (sequelize, DataTypes) => {
	const ProjectActivitySchedule = sequelize.define('projectActivitySchedule', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		start_date: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			validate: {
				notEmpty: { args: true, msg: 'Start date is required.' },
			},
		},
		end_date: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			validate: {
				notEmpty: { args: true, msg: 'End date is required.' },
			},
		},
		duration_days_estimate: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		activity_status: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
		draw_amount: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false,
			validate: {
				isDecimal: { args: true, msg: 'Draw amount should be decimal.' },
				notEmpty: { args: true, msg: 'Draw amount is required.' },
			},
		},
	})

	ProjectActivitySchedule.associate = (models) => {
		ProjectActivitySchedule.belongsTo(models.Project)
		ProjectActivitySchedule.belongsTo(models.TradeActivity)
		ProjectActivitySchedule.belongsTo(models.Contractor)
		ProjectActivitySchedule.belongsToMany(models.Comment, { through: 'ProjectActivityComments' })
	}

	return ProjectActivitySchedule
}

module.exports = projectActivitySchedule
