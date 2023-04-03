const router = require('express').Router();

//login
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
   