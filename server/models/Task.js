module.exports = (sequelize, DataTypes) => {
	const Task = sequelize.define(
		'task',
		{
			id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			user_id: {
				allowNull: false,
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
		{},
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
