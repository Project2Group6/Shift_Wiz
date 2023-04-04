const router = require('express').Router();
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
    try {

        res.render('homepage', {
            loggedIn: req.session.loggedIn
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// Login
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
   })
   


   
module.exports = router;
   
// const dayjs = require('dayjs')
// const today = dayjs().format('YYYY-MM-DD')
// // schedule shows 7 days, current day is first and highlighted
// // const dayOfWeek = dayjs().day()
// today.setDate(today.getDate())
// console.log(dateTimeFormat.format(today))
// for (i = 0; i < 6; i++){
//     today.setDate(today.getDate()+1)
//     console.log(dateTimeFormat.format(today))
// }
// // Schedule will always have 7 columns formatted in the css and handlebars
// // header is dayjs().date() + dayjs().day() where 0=sunday 6=saturday
// // then a loop for the next 6 days