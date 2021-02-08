const list = (sequelize, DataTypes) => {
	const List = sequelize.define('list', {
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
			/* [{name: 'Deb', phone: '12345'}, {name: 'John', phone: '12345', road: '123 street'}] */
			type: DataTypes.ARRAY(DataTypes.JSON),
			allowNull: false,
			validate: {
				notEmpty: { args: true, msg: 'Address is required.' },
			},
		},
	})

	return List
}

module.exports = list
