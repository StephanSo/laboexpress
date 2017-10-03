var express = require('express');
var router = express.Router();

var tasksController =require('../controllers/taskController');

router.get('/', tasksController.task_list);

router.get('/:id', tasksController.task_detail);

router.post('/', tasksController.task_ajout_post);

module.exports = router;