import "./styles.css";
import createProject from "./project.js";
import createTodo from "./todo.js";

const projects = [];
let currentProject;

function addProject(name) {
  const project = createProject(name);
  projects.push(project);
}

function deleteProject(index) {
  projects.splice(index, 1);
}

addProject("home");
addProject("work");
addProject("school");

currentProject = projects[0];

const todo1 = createTodo("wash plates", "01-02-23", "", "important");

console.log(todo1);
currentProject.addTodo(todo1);
console.log(projects);
console.log(currentProject.getTodos());
