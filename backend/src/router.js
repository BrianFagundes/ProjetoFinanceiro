const express = require('express');
const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');


const router = express.Router();

router.get('/tasks', tasksController.getAll);
router.post('/createdTask', tasksMiddleware.validate, tasksController.createdTask);


module.exports = router;