const router = require('express').Router();

const userRoutes = require('./user-routes');
const requestRoutes = require('./request-routes');

router.use('/users', userRoutes);
router.use('/request', requestRoutes);


module.exports = router;
