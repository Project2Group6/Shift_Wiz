const User = require('./User');
const Employee = require('./Employee');
const TimeOff = require('./TimeOff');

Employee.belongsTo(User, {
    foreignKey: 'user_id'
})

Employee.hasMany(TimeOff, {
    foreignKey: 'employee_id'
})

TimeOff.belongsTo(Employee, {
    foreignKey: 'employee_id'
})

module.exports = { User, Employee, TimeOff };