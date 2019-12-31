const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect(
  'mongodb://127.0.0.1:27017/task-manager-api',
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  (err, connect) => {
    if (err) {
      return console.log('Unable to connect');
    }
    console.log('datbase connected successfully');
  },
);

// const User = mongoose.model('user', {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error('Email is not valid');
//       }
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 6,
//     validate(value) {
//       if (value.toLowerCase().includes('password')) {
//         throw new Error('Your password is weak');
//       }
//     },
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error('Age must be positive number');
//       }
//     },
//   },
// });

// const me = new User({
//   name: 'Alexa     ',
//   email: 'Alexa@test.com',
//   password: '123456',
// });

// me.save()
//   .then(user => {
//     console.log(user);
//   })
//   .catch(err => console.log(err));

const Task = mongoose.model('tasks', {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const myTask = new Task({
  description: 'Buy an gun',
});

myTask
  .save()
  .then(task => {
    console.log(task);
  })
  .catch(err => console.log(err));
