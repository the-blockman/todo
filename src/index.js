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

renderProjects();
renderTodos();
