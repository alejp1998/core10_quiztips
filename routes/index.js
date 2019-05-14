
const express = require('express');
const router = express.Router();


const quizRouter = require('./quiz');
const apiRouter = require('./api');

const tipController = require('../controllers/tip');
const sessionController = require('../controllers/session');


// Routes mounted at '/api'.
router.use('/api', apiRouter);

// Routes mounted at '/'.
router.use(/^(?!\/api\/)/, quizRouter);

//Tip edit
router.get('/quizzes/:quizId(\\d+)/tips/:tipId(\\d+)/edit',sessionController.loginRequired , tipController.edit);
router.put('/quizzes/:quizId(\\d+)/tips/:tipId(\\d+)', sessionController.loginRequired , tipController.update);




//-----------------------------------------------------------

module.exports = router;
