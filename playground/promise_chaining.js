require('../src/db/mongoose');
const User = require('../src/models/user');
const Task = require('../src/models/task');

// const updateAgeandCount = async (id, age) => {
//   const user = await User.findByIdAndUpdate(id, { age });
//   const count = await User.countDocuments({ age });
//   return count;
// };

// updateAgeandCount('5e0b75b98ebc03af102de191', '2')
//   .then(user => {
//     console.log(user);
//   })
//   .catch(e => console.log(e));

// User.findByIdAndUpdate('5e0b75b98ebc03af102de191', { age: 1 })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then(count => {
//     console.log(count);
//   })
//   .catch(e => console.log(e));

// Task.findByIdAndDelete('5e0b744b3e1d7fda58d64476')
//   .then(task => {
//     console.log(task);
//     return Task.countDocuments({});
//   })
//   .then(total => {
//     console.log(total);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const findIdandDelete = async id => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: true });
  return count;
};

findIdandDelete('5e0b74273e1d7fda58d64474')
  .then(task => {
    console.log(task);
  })
  .catch(e => console.log(e));
