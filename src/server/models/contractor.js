const contractor = (sequelize, DataTypes) => {
	const Contractor = sequelize.define('contractor', {
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
		phone: {
			type: DataTypes.STRING,
			unique: { args: true, msg: 'Phone number belongs to someone else!' },
			allowNull: false,
			validate: {
				len: { args: [7, 31], msg: 'Phone number length is invalid.' },
				notEmpty: { args: true, msg: 'Phone number is required.' },
			},
		},
		ssn: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [2, 200], msg: 'SSN length min: 2 and max: 200' },
				notEmpty: { args: true, msg: 'SSN is required.' },
			},
		},
		specialty: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		license_number: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [5, 200], msg: 'License number length min: 5 and max: 200' },
				notEmpty: { args: true, msg: 'License number is required.' },
			},
		},
		license_expire: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			validate: {
				notEmpty: { args: true, msg: 'License expire date is required.' },
			},
		},
		insurance_policy_number: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [5, 200], msg: 'Insurance policy number length min: 5 and max: 200' },
				notEmpty: { args: true, msg: 'Insurance policy number is required.' },
			},
		},
		insurance_carrier: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [2, 200], msg: 'Insurance carrier length min: 2 and max: 200' },
				notEmpty: { args: true, msg: 'Insurance carrier is required.' },
			},
		},
		insurance_carrier_address: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [3, 200], msg: 'Insurance carrier address length min: 3 and max: 200' },
				notEmpty: { args: true, msg: 'Insurance carrier address is required.' },
			},
		},
		insurance_carrier_phone: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [7, 31], msg: 'Insurance carrier phone number length is invalid.' },
				notEmpty: { args: true, msg: 'Insurance carrier phone number is required.' },
			},
		},
		insurance_document: {
			type: DataTypes.JSON,
			allowNull: false,
			validate: {
				notEmpty: { args: true, msg: 'Insurance document is required.' },
			},
		},
		w9_document: {
			type: DataTypes.JSON,
			allowNull: false,
			validate: {
				notEmpty: { args: true, msg: 'W9 document is required.' },
			},
		},
	})

	Contractor.associate = (models) => {
		Contractor.belongsToMany(models.Trade, { through: 'TradeContractor' })
	}

	return Contractor
}

module.exports = contractor
