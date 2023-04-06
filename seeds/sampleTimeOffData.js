const TimeOff = require('../models/TimeOff');

const timeOffData = [
  {
    start_date: '2023-04-12',
    end_date: '2023-04-15',
    type: 'pto',
    call_in_sick_reason: null,
    employee_id: 1
  },
  {
    start_date: '2023-04-17',
    end_date: '2023-04-17',
    type: 'sick',
    call_in_sick_reason: 'Came down with the flu',
    employee_id: 1
  },
  {
    start_date: '2023-04-16',
    end_date: '2023-04-23',
    type: 'pto',
    call_in_sick_reason: null,
    employee_id: 2
  },
  {
    start_date: '2023-04-14',
    end_date: '2023-04-15',
    type: 'sick',
    call_in_sick_reason: 'Sprained ankle',
    employee_id: 2
  },
  {
    start_date: '2023-04-28',
    end_date: '2023-05-3',
    type: 'pto',
    call_in_sick_reason: null,
    employee_id: 3
  },
  {
    start_date: '2023-05-6',
    end_date: '2023-05-6',
    type: 'sick',
    call_in_sick_reason: 'Mental health day',
    employee_id: 3
  },
  {
    start_date: '2023-05-10',
    end_date: '2023-05-13',
    type: 'pto',
    call_in_sick_reason: null,
    employee_id: 4
  },
  {
    start_date: '2023-05-2',
    end_date: '2023-05-2',
    type: 'sick',
    call_in_sick_reason: 'Doctors appointment',
    employee_id: 4
  },
  {
    start_date: '2023-05-15',
    end_date: '2023-05-21',
    type: 'pto',
    call_in_sick_reason: null,
    employee_id: 5
  },
  {
    start_date: '2023-05-23',
    end_date: '2023-05-24',
    type: 'sick',
    call_in_sick_reason: 'Migraine',
    employee_id: 5
  },
]

const seedTimeOff = () => TimeOff.bulkCreate(timeOffData)

module.exports = seedTimeOff;