const vendor = (sequelize, DataTypes) => {
	const Vendor = sequelize.define('vendor', {
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
		address: {
			/* [{"Name POC1": "Deb", "Phone POC1": "12345"}, {"Name POC2": "John", "Phone POC2": "12345", "Road POC2": "123 street"}] */
			type: DataTypes.ARRAY(DataTypes.JSON),
			allowNull: false,
			validate: {
				notEmpty: { args: true, msg: 'Address is required.' },
			},
		},
	})

	return Vendor
}

module.exports = vendor
