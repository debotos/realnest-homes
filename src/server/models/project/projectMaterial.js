const projectMaterial = (sequelize, DataTypes) => {
	const ProjectMaterial = sequelize.define('projectMaterial', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
	})

	ProjectMaterial.associate = (models) => {
		ProjectMaterial.belongsTo(models.Project)
		ProjectMaterial.belongsTo(models.Vendor)
		ProjectMaterial.belongsTo(models.Trade)
		ProjectMaterial.belongsTo(models.Material)
	}

	return ProjectMaterial
}

module.exports = projectMaterial
