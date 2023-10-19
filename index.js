import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Define separate task lists for index and work pages
let taskTodo = [];
let taskWork = [];

// Normal page
app.get("/", (req, res) => {
  res.render("index.ejs", { addTaskTodo: taskTodo });
});

app.post("/", (req, res) => {
  const newTaskTodo = req.body["newTaskTodo"];
  taskTodo.push(newTaskTodo);
  res.redirect("/");
});

app.get("/work", (req, res) => {
  res.render("work.ejs", { addTaskWork: taskWork });
});

app.post("/work", (req, res) => {
  const newTaskWork = req.body["newTask"];
  taskWork.push(newTaskWork);
  res.redirect("/work");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
