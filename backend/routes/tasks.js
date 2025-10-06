// backend/routes/tasks.js
const router = require('express').Router();
const auth = require('../middleware/auth'); // Import our new middleware
let Task = require('../models/task.model');

// This route is now protected. The 'auth' function runs first.
router.get('/', auth, async (req, res) => {
  // Find only the tasks for the logged-in user
  const tasks = await Task.find({ user: req.user });
  res.json(tasks);
});

router.post('/add', auth, (req, res) => {
  const { title } = req.body;
  const newTask = new Task({
    title,
    user: req.user // Associate task with the logged-in user
  });
  newTask.save()
    .then(() => res.json('Task added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/:id', auth, async (req, res) => {
  // Make sure the user owns the task they are trying to delete
  const task = await Task.findOne({ _id: req.params.id, user: req.user });
  if (!task) {
    return res.status(404).json({ msg: 'Task not found or user not authorized' });
  }
  await Task.findByIdAndDelete(req.params.id);
  res.json('Task deleted.');
});

router.post('/update/:id', auth, async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, user: req.user });
  if (!task) {
    return res.status(404).json({ msg: 'Task not found or user not authorized' });
  }
  task.title = req.body.title;
  task.completed = req.body.completed;
  await task.save();
  res.json('Task updated!');
});

module.exports = router;