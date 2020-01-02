const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.port || 4000;

app.use(express.json());

app.post("/users", async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  try {
    await user.save();
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowUpdates = ["name", "email", "password", "age"];
  const isVaildUpdates = updates.every(update => {
    return allowUpdates.includes(updates);
  });

  if (!isVaildUpdates) {
    return res.status(422).send("Invalid updates");
  }
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send({ ...user._doc, deleted: "deleted successfully!" });
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/tasks", async (req, res) => {
  console.log(req.body);
  const task = new Task(req.body);
  try {
    await task.save();
    res.send(task);
  } catch (e) {
    res.status(400).send(err);
  }
});

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.patch("/tasks/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowUpdates = ["description", "completed"];
  const isValidateUpdate = updates.every(update => {
    return allowUpdates.includes(update);
  });

  if (!isValidateUpdate) {
    return res.status(422).send("Invalid updates");
  }

  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    res.send({ ...task._doc, deleted: "deleted successfully!" });
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(port, () => {
  console.log("Server is started on " + port);
});
