const { Schedule } = require('../models');

const ScheduleData = [
  {
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
    days_working: '1, 4, 7',
    schedule_alteration: null,
    pto_request: null,
    call_in_sick_reason: null,
  },
  {
    id: 2,
    first_name: 'Jane',
    last_name: 'Smith',
    days_working: '3, 5, 8',
    schedule_alteration: 'Monday, Wednesday',
    pto_request: '2023-04-05',
    call_in_sick_reason: null,
  },
  {
    id: 3,
    first_name: 'Mike',
    last_name: 'Johnson',
    days_working: '1, 2, 3, 4, 5',
    schedule_alteration: null,
    pto_request: '2023-05-01',
    call_in_sick_reason: null,
  },
  {
    id: 4,
    first_name: 'Emily',
    last_name: 'Davis',
    days_working: '1, 2, 4, 5',
    schedule_alteration: 'Wednesday, Saturday',
    pto_request: null,
    call_in_sick_reason: 'Feeling unwell',
  },
  {
    id: 5,
    first_name: 'David',
    last_name: 'Garcia',
    days_working: '1, 2, 3, 4, 5',
    schedule_alteration: null,
    pto_request: null,
    call_in_sick_reason: null,
  },
];

const seedScheduleData = () => ScheduleData.bulkCreate(ScheduleData);

module.exports = seedScheduleData;