module.exports = (sequelize, DataTypes) => {
	const Task = sequelize.define(
		'tasks',
		{
			id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			user_id: {
				allowNull: true,
				type: DataTypes.UUID,
				references: {
					model: 'user',
					key: 'id',
				},
			},
			title: {
				allowNull: false,
				unique: true,
				type: DataTypes.STRING,
			},
			description: {
				allowNull: false,
				type: DataTypes.TEXT,
			},
			price: {
				allowNull: false,
				type: DataTypes.DOUBLE,
			},
			status: {
				allowNull: false,
				type: DataTypes.ENUM('todo', 'in-progress', 'testing', 'done', 'paid'),
				defaultValue: 'todo',
			},
		},
		{
			sequelize,
			freezeTableName: true,
			modelName: 'users',
			timestamps: true
		},
	);

	Task.associate = (models) => {
		Task.belongsTo(models.User, {
			foreignKey: 'user_id',
			targetKey: 'id',
			as: 'user',
		});
	};

	return Task;
};
