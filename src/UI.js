import {
  getProjects,
  getCurrentProject,
  setCurrentProject,
  addProject,
  deleteProject,
} from "./app.js";
import createTodo from "./todo.js";

let projectContainer = document.getElementById("projects-tab");
let todoContainer = document.getElementById("todo-display");
const newProjectBtn = document.getElementById("new-project-btn");
const dialog = document.getElementById("new-project");
const projectForm = document.getElementById("project-form");
const cancelBtn = document.getElementById("cancel-btn");
const newTodoBtn = document.getElementById("new-todo-btn");
const todoDialog = document.getElementById("new-todo");
const todoForm = document.getElementById("todo-form");
const cancelTodoBtn = document.getElementById("cancel-todo-btn");

const renderProjects = () => {
  projectContainer.innerHTML = "";
  let projects = getProjects();
  projects.forEach((proj, index) => {
    const projectRow = document.createElement("div");
    const project = document.createElement("h3");
    project.textContent = "# " + proj.name;
    projectRow.appendChild(project);
    if (index !== 0) {
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "delete";
      projectRow.appendChild(deleteBtn);

      deleteBtn.addEventListener("click", () => {
        let currentProject = getCurrentProject();
        deleteProject(index);
        if (currentProject === proj) setCurrentProject(0);
        renderProjects();
        renderTodos();
      });
    }
    project.dataset.id = index;
    project.addEventListener("click", () => {
      setCurrentProject(index);
      renderTodos();
    });
    projectContainer.appendChild(projectRow);
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

newProjectBtn.addEventListener("click", () => {
  dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
  dialog.close();
});

projectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const projectName = projectForm.name.value;
  addProject(projectName);
  projectForm.reset();
  dialog.close();
  renderProjects();
});

newTodoBtn.addEventListener("click", () => {
  todoDialog.showModal();
});

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let currentProject = getCurrentProject();
  const todoTitle = todoForm.title.value;
  const todoDesc = todoForm.description.value;
  const todoDate = todoForm.dueDate.value;
  const todoPriority = todoForm.priority.value;

  const newTodo = createTodo(todoTitle, todoDate, todoDesc, todoPriority);
  currentProject.addTodo(newTodo);
  todoForm.reset();
  todoDialog.close();
  renderTodos();
});

cancelTodoBtn.addEventListener("click", () => {
  todoDialog.close();
});

export { renderProjects, renderTodos };
