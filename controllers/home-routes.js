const router = require('express').Router();
const { Employee, TimeOff, User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');
const getSched = require('../public/js/renderSched')

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
router.get('/schedule', withAuth, async (req, res) => {
  try {
    const employeeData = await getSched
    // TODO: Fetch schedule data from the database and pass it to the template
    console.log(employeeData)
    res.render('schedule', {
      sched: employeeData.sched,
      days: employeeData.days,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET profile page (TEMPLATE CODE)
router.get('/profile', withAuth, async (req, res) => {
  // TEMP!! ↓ ------------------------------------------------------------------------------ ↓
  try {
    const userData = await User.findByPk(req.session.userId, {
      attributes: ['firstName', 'lastName', 'email', 'username'],
    });

    if (!userData) {
      throw new Error('User data not found');
    }

    const user = userData.get({ plain: true });
  // TEMP!! ↑ ------------------------------------------------------------------------------ ↑
  // render profile handlebar and pass user specific data
    res.render('profile', {
      profile: profileData,
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

// GET availability page (TEMPLATE CODE)
router.get('/availability', withAuth, async (req, res) => {
  // TEMP!! ↓ ------------------------------------------------------------------------------- ↓
  try {
    const availabilityData = await Availability.findAll({
      where: { userId: req.session.userId },
      attributes: ['id', 'startDate', 'endDate', 'notes'],
      order: [['startDate', 'ASC']],
    });
  // TEMP!! ↑ ------------------------------------------------------------------------------- ↑
    // render availibility handlebar (to modify, WIP)
    res.render('availability', {
      availability: availabilityData,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET sick calls page (TEMPLATE CODE)
router.get('/sick-calls', withAuth, async (req, res) => {
  // TEMP!! ↓ -------------------------------------------------------------------------------- ↓
  try {
    res.render('sickCalls', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET PTO page (TEMPLATE CODE)
router.get('/pto', withAuth, async (req, res) => {
  // TEMP!! ↓ ---------------------------------------------------------------------------------- ↓
  try {
    const ptoData = await PTO.findAll({
      where: { userId: req.session.userId },
      attributes: ['id', 'startDate', 'endDate', 'notes'],
      order: [['startDate', 'ASC']],
    });
  // TEMP!! ↑ ---------------------------------------------------------------------------------- ↑
  // render PTO handlebar to submit time off
    res.render('pto', {
      pto: ptoData,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


// Signup
router.get('/signup', (req,res)=>{
    res.render('signup')
   });

module.exports = router;

