const express = require("express");
require("./db/mongoose");
const routerUser = require("./routers/users");
const routerTask = require("./routers/task");

const app = express();
const port = process.env.port || 4000;

app.use(express.json());
app.use(routerUser);
app.use(routerTask);

app.listen(port, () => {
  console.log("Server is started on " + port);
});
