const { DataTypes } = require('sequelize');
const sequelize =  require('../connection');

const UserAssignment = sequelize.define('UserAssignment', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    assignment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    score: {
        type: DataTypes.FLOAT,
        allowNull: false,   
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

module.exports = UserAssignment;