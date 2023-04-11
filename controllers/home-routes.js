const router = require('express').Router();
const { Employee, TimeOff, User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');
const getSched = require('../public/js/renderSched');
const { raw } = require('express');
const dayjs = require('dayjs')
const today = dayjs()

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

      // schedule shows 7 days, current day is first
      const week = []
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
        // Fetch schedule data from the database
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
    // Fetch schedule data from the database and pass it to the template
    res.render('schedule', {
      sched: employeeData.sched,
      days: employeeData.days,
      timeOff: employeeData.timeOff,
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
      attributes: ['username', 'email'],
      include: {
          model: Employee,
          attributes: ['first_name', 'last_name', 
          'works_sunday', 'works_monday', 'works_tuesday', 'works_wednesday',
           'works_thursday', 'works_friday', 'works_saturday', ],
           as: 'employee',
      },
  })
    if (!userData) {
      throw new Error('User data not found');
    }
    // render profile handlebar and pass user specific data
    res.render('profile', {
      profile: userData.get({plain:true}),
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
  try {
    const avail = await Employee.findByPk(req.session.userId, {
      attributes: ['works_sunday', 'works_monday', 'works_tuesday', 'works_wednesday',
      'works_thursday', 'works_friday', 'works_saturday']
    })
    res.render('availability', {
      avail: avail.get({plain: true}),
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET sick calls page (TEMPLATE CODE)
router.get('/sick-calls', withAuth, async (req, res) => {
  try {
    res.render('sickCall', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET PTO page (TEMPLATE CODE)
router.get('/pto', withAuth, async (req, res) => {
  try {
    res.render('pto', {
      loggedIn: req.session.loggedIn,
    })
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
router.get('/signup', (req, res) => {
  res.render('signup')
});

module.exports = router;