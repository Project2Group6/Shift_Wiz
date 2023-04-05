const router = require('express').Router();
const { Gallery, Painting } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Check if user is logged in
    if (req.session.loggedIn) {
      return res.redirect('/schedule');
    }

    res.render('homepage', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET schedule page (TEMPLATE CODE)
router.get('/schedule', (req, res) => {
  try {
    // TODO: Fetch schedule data from the database and pass it to the template
    const scheduleData = [
      { date: '2023-04-03', event: 'Event 1' },
      { date: '2023-04-04', event: 'Event 2' },
      { date: '2023-04-05', event: 'Event 3' },
      { date: '2023-04-06', event: 'Event 4' },
      { date: '2023-04-07', event: 'Event 5' },
    ];

    res.render('schedule', {
      schedule: scheduleData,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET profile page (TEMPLATE CODE)
router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.userId, {
      attributes: ['firstName', 'lastName', 'email', 'username'],
    });

    if (!userData) {
      throw new Error('User data not found');
    }

    const user = userData.get({ plain: true });

    res.render('profile', {
      user,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    if (err.name === 'SequelizeDatabaseError') {
      res.status(500).send('Error retrieving user data from database');
    } else {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
