import "./styles.css";
import { loadProjects } from "./Storage.js";
import { addProject, setCurrentProject } from "./app.js";
import { renderProjects, renderTodos } from "./UI.js";

if (localStorage.getItem("projects") !== null) loadProjects();
else {
  addProject("home");
  addProject("work");
  addProject("school");
}

setCurrentProject(0);

renderProjects();
renderTodos();
