const Sequelize = require('sequelize');
require('dotenv').config();

if(process.env.DB_URL) {
    sequelize = new Sequelize(process.env.DB_URL);
} else {
    const sequelize = new Sequelize(
        process.env.DATABASE,
        process.env.USER,
        process.env.PASSWORD,
        {
            host: 'localhost',
            dialect: 'postgres'
        }
    )
}


module.exports = sequelize;
