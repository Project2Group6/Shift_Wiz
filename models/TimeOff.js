const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class TimeOff extends Model { }


TimeOff.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,

        },
        end_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        call_in_sick_reason: {
            type: DataTypes.STRING,
            allowNull: true
        },
        employee_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'employee',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'timeOff',
    }
)


module.exports = TimeOff;

