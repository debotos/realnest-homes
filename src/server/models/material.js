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
				len: { args: [2, 150], msg: 'Material category value length min: 2 and max: 150' },
				notEmpty: { args: true, msg: 'Material category is required.' },
			},
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [3, 200], msg: 'Material name length min: 3 and max: 200' },
				notEmpty: { args: true, msg: 'Material name is required.' },
			},
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [2, 150], msg: 'Material type value length min: 2 and max: 150' },
				notEmpty: { args: true, msg: 'Material type is required.' },
			},
		},
		grade_level: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [2, 150], msg: 'Material grade level value length min: 2 and max: 150' },
				notEmpty: { args: true, msg: 'Material grade level is required.' },
			},
		},
		unit_price: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false,
			validate: {
				isDecimal: { args: true, msg: 'Material unit price should be decimal.' },
				notEmpty: { args: true, msg: 'Material unit price is required.' },
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
