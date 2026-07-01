import {
  getProjects,
  getCurrentProject,
  setCurrentProject,
  addProject,
  deleteProject,
} from "./app.js";
import { saveProjects } from "./Storage.js";
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
const detailPanel = document.getElementById("detail-panel");
const closePanel = document.getElementById("close-panel");

const renderProjects = () => {
  projectContainer.innerHTML = "";
  let projects = getProjects();
  let currentProject = getCurrentProject();
  projects.forEach((proj, index) => {
    const projectRow = document.createElement("div");
    const project = document.createElement("div");
    project.classList.add("project-name");
    project.textContent = "# " + proj.name;
    projectRow.appendChild(project);
    projectRow.addEventListener("click", () => {
      setCurrentProject(index);
      renderProjects();
      renderTodos();
    });
    if (index !== 0) {
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "x";
      deleteBtn.classList.add("delete-project-btn");
      projectRow.appendChild(deleteBtn);
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        deleteProject(index);
        if (currentProject === proj) setCurrentProject(0);
        renderProjects();
        renderTodos();
        saveProjects();
      });
    }
    if (currentProject === proj) projectRow.classList.add("active");
    project.dataset.id = index;

    projectContainer.appendChild(projectRow);
  });
};

const renderTodos = () => {
  todoContainer.innerHTML = "";
  let currentProject = getCurrentProject();

  const projectTodos = currentProject.getTodos();
  projectTodos.forEach((td, index) => {
    const todoRow = document.createElement("div");
    todoRow.classList.add("todo-row");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    const todoTitle = document.createElement("h5");
    const todoDate = document.createElement("p");
    const todoPriority = document.createElement("span");
    const deleteTodo = document.createElement("button");
    deleteTodo.textContent = "delete";
    todoTitle.textContent = td.title;
    todoDate.textContent = td.dueDate;
    todoPriority.textContent = "\u25CF" + td.priority;

    if (td.priority === "low") {
      todoPriority.style.color = "var(--low-priority-color)";
    } else if (td.priority === "medium")
      todoPriority.style.color = "var(--medium-priority-color)";
    else todoPriority.style.color = "var(--high-priority-color)";

    checkBox.addEventListener("change", (e) => {
      td.completed = !td.completed;
      todoRow.classList.toggle("completed");
      saveProjects();
    });

    checkBox.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    deleteTodo.addEventListener("click", () => {
      currentProject.deleteTodo(index);
      renderTodos();
      saveProjects();
    });

    todoRow.addEventListener("click", () => {
      detailPanel.innerHTML = "";
      const todoDesc = document.createElement("p");
      const todoPriority = document.createElement("p");
      const todoTitlePanel = document.createElement("p");
      todoTitlePanel.classList.add("detail-title");
      const todoDatePanel = document.createElement("h5");
      const closeBtn = document.createElement("button");
      const editBtn = document.createElement("button");
      detailPanel.classList.remove("hidden");

      todoDesc.textContent = td.description;
      todoPriority.textContent = td.priority;
      todoTitlePanel.textContent = td.title;
      todoDatePanel.textContent = td.dueDate;
      closeBtn.textContent = "close";
      editBtn.textContent = "edit";

      detailPanel.appendChild(todoTitlePanel);
      detailPanel.appendChild(todoDesc);
      detailPanel.appendChild(todoDatePanel);
      detailPanel.appendChild(todoPriority);
      detailPanel.appendChild(closeBtn);
      detailPanel.appendChild(editBtn);

      closeBtn.addEventListener("click", () => {
        detailPanel.classList.add("hidden");
      });

      editBtn.addEventListener("click", () => {
        detailPanel.innerHTML = "";
        const editTitle = document.createElement("input");
        editTitle.type = "text";
        editTitle.value = td.title;
        const editDate = document.createElement("input");
        editDate.type = "date";
        editDate.value = td.dueDate;
        const editDesc = document.createElement("input");
        editDesc.type = "text";
        editDesc.value = td.description;
        const editPriority = document.createElement("select");
        const options = ["low", "medium", "high"];
        options.forEach((priority) => {
          const option = document.createElement("option");
          option.value = priority;
          option.textContent = priority;
          editPriority.appendChild(option);
        });
        editPriority.value = td.priority;

        const saveBtn = document.createElement("button");
        saveBtn.textContent = "save";

        saveBtn.addEventListener("click", () => {
          currentProject.editTodo(
            index,
            editTitle.value,
            editDate.value,
            editDesc.value,
            editPriority.value,
          );
          renderTodos();
          detailPanel.classList.add("hidden");
          saveProjects();
        });

        detailPanel.appendChild(editTitle);
        detailPanel.appendChild(editDesc);
        detailPanel.appendChild(editDate);
        detailPanel.appendChild(editPriority);
        detailPanel.appendChild(closeBtn);
        detailPanel.appendChild(editBtn);
        detailPanel.appendChild(saveBtn);
      });
    });

    todoRow.appendChild(checkBox);
    todoRow.appendChild(todoTitle);
    todoRow.appendChild(deleteTodo);
    todoRow.appendChild(todoPriority);
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
  saveProjects();
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
  saveProjects();
});

cancelTodoBtn.addEventListener("click", () => {
  todoDialog.close();
});

export { renderProjects, renderTodos };
