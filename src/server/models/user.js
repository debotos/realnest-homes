const bcrypt = require('bcrypt')

const user = (sequelize, DataTypes) => {
	const User = sequelize.define('user', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true,
		},
		full_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [3, 100], msg: 'Full name length min: 3 and max: 100' },
				notEmpty: { args: true, msg: 'Full name is required.' },
			},
		},
		user_name: {
			type: DataTypes.STRING,
			unique: { args: true, msg: 'Username is already taken.' },
			allowNull: false,
			validate: {
				len: { args: [3, 60], msg: 'Username length min: 3 and max: 60' },
				notEmpty: { args: true, msg: 'Username is required.' },
			},
		},
		email: {
			type: DataTypes.STRING,
			unique: { args: true, msg: 'Email already exist!' },
			allowNull: false,
			validate: {
				len: { args: [3, 100], msg: 'Invalid email address.' },
				notEmpty: { args: true, msg: 'Email is required.' },
				isEmail: { args: true, msg: 'Invalid email address.' },
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [8], msg: 'Password must be at least 8 characters long.' },
				notEmpty: { args: true, msg: 'Password is required.' },
			},
		},
	})

	// User.associate = (models) => {
	// User.hasOne(models.Profile, { onDelete: 'CASCADE' })
	// User.hasMany(models.Message, { onDelete: 'CASCADE' })
	// }

	User.findByLogin = async (login) => {
		let user = await User.findOne({ where: { user_name: login } })

		if (!user) {
			user = await User.findOne({ where: { email: login } })
		}

		return user
	}

	User.beforeCreate(async (user) => {
		user.password = await user.generatePasswordHash()
	})

	/*
		beforeUpdate hook called when use instance.save() or instance.update(), 
		when use model.update(), beforeBulkUpdate will be called.
	*/
	User.beforeUpdate(async (user) => {
		if (user.changed('password')) {
			user.password = await user.generatePasswordHash()
		}
	})

	User.prototype.generatePasswordHash = async function () {
		const saltRounds = 10
		return await bcrypt.hash(this.password, saltRounds)
	}

	User.prototype.validatePassword = async function (password) {
		return await bcrypt.compare(password, this.password)
	}

	return User
}

module.exports = user
