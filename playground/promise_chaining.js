require('../src/db/mongoose');
const User = require('../src/models/user');
const Task = require('../src/models/task');
// User.findByIdAndUpdate('5e0b75b98ebc03af102de191', { age: 1 })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then(count => {
//     console.log(count);
//   })
//   .catch(e => console.log(e));

Task.findByIdAndDelete('5e0b744b3e1d7fda58d64476')
  .then(task => {
    console.log(task);
    return Task.countDocuments({});
  })
  .then(total => {
    console.log(total);
  })
  .catch(e => {
    console.log(e);
  });
