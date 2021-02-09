const material = (sequelize, DataTypes) => {
	const Material = sequelize.define('material', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		category: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [2, 150], msg: 'Category length min: 2 and max: 150' },
				notEmpty: { args: true, msg: 'Category is required.' },
			},
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [3, 200], msg: 'Name length min: 3 and max: 200' },
				notEmpty: { args: true, msg: 'Name is required.' },
			},
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [2, 150], msg: 'Type length min: 2 and max: 150' },
				notEmpty: { args: true, msg: 'Type is required.' },
			},
		},
		grade_level: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [2, 150], msg: 'Grade level length min: 2 and max: 150' },
				notEmpty: { args: true, msg: 'Grade level is required.' },
			},
		},
		unit_price: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false,
			validate: {
				isDecimal: { args: true, msg: 'Unit price should be decimal.' },
				notEmpty: { args: true, msg: 'Unit price is required.' },
			},
		},
		properties: {
			/* {"Property1 Key": "Property1 Value", "Property2 Key": "Property2 Value"} */
			type: DataTypes.JSON,
			allowNull: true,
		},
	})

	Material.associate = (models) => {
		Material.belongsToMany(models.Trade, { through: 'TradeMaterial' })
	}

	return Material
}

module.exports = material
