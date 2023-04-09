const sequelize = require('../../config/connection')
const { TimeOff } = require('../../models')
const Employee = require('../../models/Employee')
const dayjs = require('dayjs')

async function getSched() {

const today = dayjs()
const week = []

// schedule shows 7 days, current day is first and highlighted
const weekDays = []
for (i = 0; i < 7; i++) {
    week.push(today.add(i, 'day').day())
    if(week[i] === 0) {
        weekDays.push('Sun')
    } else if (week[i] === 1) {
        weekDays.push('Mon')
    } else if (week[i] === 2) {
        weekDays.push('Tue')
    } else if (week[i] === 3) {
        weekDays.push('Wed')
    } else if (week[i] === 4) {
        weekDays.push('Thu')
    } else if (week[i] === 5) {
        weekDays.push('Fri')
    } else if (week[i] === 6) {
        weekDays.push('Sat')
    }
}  

const weekDates = []
var dayDatePairs = []
const fullDates = []
for (i = 0; i < 7; i ++) {
    weekDates.push(today.add(i, 'day').format('DD'))
    fullDates.push(today.add(i, 'day').format('YYYY-MM-DD'))
}
for(i = 0; i < 7; i++) {
    dayDatePairs.push({day: weekDays[i], weekDate: weekDates[i], fullDate: fullDates[i]})
};

    const schedData = await Employee.findAll({
                attributes: ['id', 'first_name', 'last_name', 
                'works_sunday', 'works_monday','works_tuesday','works_wednesday',
                'works_thursday','works_friday','works_saturday',] 
    })

    const timeOffData = await TimeOff.findAll({
        attributes: ['id', 'start_date', 'end_date', 'type', 'call_in_sick_reason', 'employee_id'],
        include: {
            model: Employee,
            attributes: ['first_name', 'last_name', 'id'],
            as: 'employee',
        }
    })

    const employeeData = {sched: schedData.map((id) => 
    id.get({plain: true})), days: dayDatePairs, timeOff: timeOffData.map((id) => id.get({plain: true}))}
    return employeeData
}

module.exports = getSched()