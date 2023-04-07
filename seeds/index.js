const sequelize = require('../config/connection');
const seedUser = require('./sampleUserData');
const seedEmployee = require('./sampleEmployeeData');
const seedTimeOff = require('./sampleTimeOffData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedEmployee();

  await seedTimeOff();
  console.log("seeding finished");
  process.exit(0);
};


seedAll();