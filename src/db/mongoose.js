const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://127.0.0.1:27017/task-manager-api',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err, connect) => {
    if (err) {
      return console.log('Unable to connect');
    }
    console.log('datbase connected successfully');
  },
);
