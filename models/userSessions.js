const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserSessions extends Model {};

UserSessions.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'userSessions'
});

module.exports = UserSessions;
