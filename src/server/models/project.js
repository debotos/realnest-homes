const project = (sequelize, DataTypes) => {
	const Project = sequelize.define('project', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		project_number: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [3, 200], msg: 'Project number value length min: 3 and max: 200' },
				notEmpty: { args: true, msg: 'Project number is required.' },
			},
		},
		project_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [3, 200], msg: 'Project name value length min: 3 and max: 200' },
				notEmpty: { args: true, msg: 'Project name is required.' },
			},
		},
		project_group: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [3, 200], msg: 'Project group value length min: 3 and max: 200' },
				notEmpty: { args: true, msg: 'Project group is required.' },
			},
		},
		project_owner: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [3, 200], msg: 'Project owner value length min: 3 and max: 200' },
				notEmpty: { args: true, msg: 'Project owner is required.' },
			},
		},
		project_address: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [3, 250], msg: 'Project address value length min: 3 and max: 250' },
				notEmpty: { args: true, msg: 'Project address is required.' },
			},
		},
		project_living_area: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [3, 200], msg: 'Project living area value length min: 3 and max: 200' },
				notEmpty: { args: true, msg: 'Project living area is required.' },
			},
		},
		project_covered_area: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [3, 200], msg: 'Project covered area value length min: 3 and max: 200' },
				notEmpty: { args: true, msg: 'Project covered area is required.' },
			},
		},
		stories: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		bedroom_count: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		bathroom_count: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		foundation_type: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [3, 200], msg: 'Foundation type value length min: 3 and max: 200' },
				notEmpty: { args: true, msg: 'Foundation type is required.' },
			},
		},
		expenses_account: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: { args: [3, 200], msg: 'Project expenses account value length min: 3 and max: 200' },
				notEmpty: { args: true, msg: 'Project expenses account is required.' },
			},
		},
		sequence: {
			/* ["UUID_of_trade1", "UUID_of_trade2"] */
			type: DataTypes.ARRAY(DataTypes.UUID),
			allowNull: false,
			validate: {
				notEmpty: { args: true, msg: 'List of trade is required.' },
			},
		},
	})

	return Project
}

module.exports = project
