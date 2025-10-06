// backend/models/task.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  // ADD THIS user FIELD:
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // This links the task to a User
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;