const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)

module.exports = sequelize;
