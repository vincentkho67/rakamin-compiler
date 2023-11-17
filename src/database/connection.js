const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres',
    username: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'code',
});

module.exports = sequelize;