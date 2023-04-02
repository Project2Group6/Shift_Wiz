const { User } = require('../User');
const bcrypt = require('bcrypt')

const userData = [
    {
        username: 'JDoe123',
        email: 'JohnDoe@mail.com',
        password: bcrypt('password123')
    },
    {
        username: 'ASmith123',
        email: 'AmySmith@mail.com',
        password: bcrypt('123password')
    },
    {
        username: 'CRogers123',
        email: 'ChuckRogers@mail.com',
        password: bcrypt('1password23')
    },
    {
        username: 'SSkinner',
        email: 'SusanSkinner@mail.com',
        password: bcrypt('23password1')
    },
    {
        username: 'SChen',
        email: 'SarahChen@mail.com',
        password: bcrypt('pass123word')
    },
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
