const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.port || 4000;

app.use(express.json());

app.post('/users', (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user
    .save()
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    });
});

app.post('/tasks', (req, res) => {
  console.log(req.body);
  const task = new Task(req.body);
  task
    .save()
    .then(task => {
      res.send(task);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    });
});

app.get('/users', (req, res) => {
  User.find({})
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

app.get('/users/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

app.get('/tasks', (req, res) => {
  Task.find({})
    .then(task => {
      res.send(task);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

app.get('/tasks/:id', (req, res) => {
  Task.findById(req.params.id)
    .then(task => {
      if (!task) {
        return res.status(404).send();
      }
      res.send(task);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

app.listen(port, () => {
  console.log('Server is started on ' + port);
});
