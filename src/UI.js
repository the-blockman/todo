import { getProjects, getCurrentProject } from "./app.js";

let projectContainer = document.getElementById("projects-tab");
let todoContainer = document.getElementById("todo-display");

const renderProjects = () => {
  projectContainer.innerHTML = "";
  let projects = getProjects();
  projects.forEach((proj) => {
    const project = document.createElement("h3");
    project.textContent = "# " + proj.name;
    projectContainer.appendChild(project);
  });
};

const renderTodos = () => {
  todoContainer.innerHTML = "";
  let currentProject = getCurrentProject();
  const projectTodos = currentProject.getTodos();
  projectTodos.forEach((td) => {
    const todoRow = document.createElement("div");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    const todoTitle = document.createElement("h5");
    const todoDate = document.createElement("p");
    todoTitle.textContent = td.title;
    todoDate.textContent = td.dueDate;

    todoRow.appendChild(checkBox);
    todoRow.appendChild(todoTitle);
    todoRow.appendChild(todoDate);

    todoContainer.appendChild(todoRow);
  });
};

export { renderProjects, renderTodos };
