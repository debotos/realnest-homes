const listInput = (sequelize, DataTypes) => {
	const ListInput = sequelize.define('listInput', {
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
				len: { args: [3, 200], msg: 'List Name length min: 3 and max: 200' },
				notEmpty: { args: true, msg: 'List Name is required.' },
			},
		},
		items: {
			/* Example for name: "Payment" -> items: ["Cash", "Check", "Zelle", "Wire"] */
			type: DataTypes.ARRAY(DataTypes.STRING),
			allowNull: false,
			validate: {
				notEmpty: { args: true, msg: 'Items should not be empty.' },
			},
		},
	})

	return ListInput
}

module.exports = listInput
