const Sequelize = require('sequelize');
const getConfig = require('../utils/getConfig');

const config = getConfig();

const sequelize = new Sequelize({ ...config });

const UserModel = require('./User');
const TaskModel = require('./Task');

const models = {
    User: UserModel(sequelize, Sequelize),
    Task: TaskModel(sequelize, Sequelize),
};

Object.values(models)
    .filter((model) => typeof model.associate === 'function')
    .forEach((model) => model.associate(models));

const db = {
    ...models,
    sequelize,
};

module.exports = db;
