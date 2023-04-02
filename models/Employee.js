const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model {}

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        works_sunday: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        works_monday: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        works_tuesday: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        works_wednesday: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        works_thursday: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        works_friday: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        works_saturday: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            },
        },
        is_manager: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'employee'
    }
)
module.exports = Employee