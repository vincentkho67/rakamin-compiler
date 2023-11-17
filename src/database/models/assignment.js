const { DataTypes } = require('sequelize');
const sequelize =  require('../connection');
const UserAssignment = require('./userassignment');
const User = require('./user');

const Assignment = sequelize.define('Assignment', {
    user_assignment_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    context: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    }
});

module.exports = Assignment;