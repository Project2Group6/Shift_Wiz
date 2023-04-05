const User = require('../models/User');
const bcrypt = require('bcrypt')

const password = 'password123'
const hash = bcrypt.hashSync(password, 10)

const userData = [
    {
        username: 'JDoe123',
        email: 'JohnDoe@mail.com',
        password: hash
    },
    {
        username: 'ASmith123',
        email: 'AmySmith@mail.com',
        password: hash
    },
    {
        username: 'CRogers123',
        email: 'ChuckRogers@mail.com',
        password: hash
    },
    {
        username: 'SSkinner',
        email: 'SusanSkinner@mail.com',
        password: hash
    },
    {
        username: 'SChen',
        email: 'SarahChen@mail.com',
        password: hash
    },
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;