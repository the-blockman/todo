import "./styles.css";
import createTodo from "./todo.js";
import { loadProjects, saveProjects } from "./Storage.js";
import { addProject, getCurrentProject, setCurrentProject } from "./app.js";
import { renderProjects, renderTodos } from "./UI.js";

if (localStorage.getItem("projects") !== null) loadProjects();
else {
  addProject("home");
  addProject("work");
  addProject("school");
}

setCurrentProject(0);
let currentProject = getCurrentProject();

const todo1 = createTodo("wash plates", "01-02-23", "", "important");
currentProject.addTodo(todo1);

renderProjects();
renderTodos();
