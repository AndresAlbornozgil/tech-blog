const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    "tech_blog_db",
    "postgres",
    "2212",
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)

module.exports = sequelize;
