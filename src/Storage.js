import { addProject, projects } from "./app.js";

function saveProjects() {
  const projectString = JSON.stringify(projects);
  localStorage.setItem("projects", projectString);
}

function loadProjects() {
  let savedProjects = localStorage.getItem("projects");
  if (!savedProjects) return;
  savedProjects = JSON.parse(savedProjects);
  savedProjects.map((projects) => {
    let savedProject = addProject(projects.name);
    projects.todos.forEach((todo) => {
      savedProject.addTodo(todo);
    });
  });
}

export { saveProjects, loadProjects };
