const Employee = require('../models/Employee');

const employeeData = [
  {
    first_name: 'John',
    last_name: 'Doe',
    works_sunday: false,
    works_monday: true,
    works_tuesday: true,
    works_wednesday: true,
    works_thursday: true,
    works_friday: true,
    works_saturday: false,
    user_id: 1,
    is_manager: false
  },
  {
    first_name: 'Amy',
    last_name: 'Smith',
    works_sunday: false,
    works_monday: true,
    works_tuesday: true,
    works_wednesday: true,
    works_thursday: true,
    works_friday: true,
    works_saturday: false,
    user_id: 2,
    is_manager: false
  },
  {
    first_name: 'Chuck',
    last_name: 'Rogers',
    works_sunday: false,
    works_monday: true,
    works_tuesday: true,
    works_wednesday: true,
    works_thursday: true,
    works_friday: true,
    works_saturday: false,
    user_id: 3,
    is_manager: false
  },
  {
    first_name: 'Susan',
    last_name: 'Skinner',
    works_sunday: true,
    works_monday: true,
    works_tuesday: false,
    works_wednesday: false,
    works_thursday: false,
    works_friday: true,
    works_saturday: true,
    user_id: 4,
    is_manager: false
  },
  {
    first_name: 'Sarah',
    last_name: 'Chen',
    works_sunday: true,
    works_monday: true,
    works_tuesday: false,
    works_wednesday: false,
    works_thursday: false,
    works_friday: true,
    works_saturday: true,
    user_id: 5,
    is_manager: false
  },
];

const seedEmployee = async () => {
  try {
    await Employee.bulkCreate(employeeData);
    console.log('Employee data seeded successfully \n');
  } catch (error) {
    console.error('Error seeding employee data:', error);
  }
};

module.exports = seedEmployee;