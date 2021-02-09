const projectExpense = (sequelize, DataTypes) => {
	const ProjectExpense = sequelize.define('projectExpense', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		payment_for: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [2, 250], msg: "'Payment for' value length min: 2 and max: 250" },
				notEmpty: { args: true, msg: "'Payment for' is required." },
			},
		},
		payment_type: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [2, 100], msg: 'Payment type value length min: 2 and max: 100' },
				notEmpty: { args: true, msg: 'Payment type is required.' },
			},
		},
		payment_date: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			validate: {
				notEmpty: { args: true, msg: 'Payment data is required.' },
			},
		},
	})

	ProjectExpense.associate = (models) => {
		ProjectExpense.belongsTo(models.Project)
		ProjectExpense.belongsTo(models.TradeActivity)
		ProjectExpense.belongsTo(models.DrawSchedule)
		ProjectExpense.belongsTo(models.Vendor, { foreignKey: 'payment_to' })
	}

	return ProjectExpense
}

module.exports = projectExpense
