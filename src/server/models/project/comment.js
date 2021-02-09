const comment = (sequelize, DataTypes) => {
	const Comment = sequelize.define('comment', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		text: {
			type: DataTypes.TEXT,
			allowNull: true,
			validate: {
				notEmpty: { args: true, msg: 'Comment text is required.' },
			},
		},
	})

	Comment.associate = (models) => {
		Comment.belongsTo(models.User)
	}

	return Comment
}

module.exports = comment
