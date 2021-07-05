const passwordUtils = require('../utils/password')

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'users',
		{
			id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			username: {
				type: DataTypes.STRING,
			},
			password: {
				allowNull: false,
				type: DataTypes.STRING,
				validate: {
					len: [8],
				},
			},
			role: {
				allowNull: false,
				type: DataTypes.ENUM('freelancer', 'client'),
				defaultValue: 'freelancer',
			},
		},
		{
			sequelize,
			freezeTableName: true,
			modelName: 'users',
			timestamps: true
		},
	);


	User.prototype.toJSON = function toJSON() {
		const values = Object.assign({}, this.get());
		delete values.password;
		return values;
	};

	User.prototype.comparePassword = async function comparePassword(password) {
		return passwordUtils.compare(password, this.get('password'));
	};

	User.associate = (models) => {
		User.hasMany(models.Task, {
			foreignKey: 'user_id',
			sourceKey: 'id',
			as: 'tasks',
		});
	};

	return User;
};