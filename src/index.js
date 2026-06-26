import "./styles.css";
import createTodo from "./todo.js";
import { addProject, deleteProject, getProjects } from "./app.js";

let currentProject;

addProject("home");
addProject("work");
addProject("school");

const currentProjects = getProjects();
currentProject = currentProjects[0];

const todo1 = createTodo("wash plates", "01-02-23", "", "important");

console.log(todo1);
console.log(currentProjects);
console.log(currentProject);
