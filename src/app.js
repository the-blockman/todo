import createProject from "./project.js";

const projects = [];
let currentProject;

function setCurrentProject(index) {
  currentProject = projects[index];
}

function getCurrentProject() {
  return currentProject;
}

function addProject(name) {
  const project = createProject(name);
  projects.push(project);
  return project;
}

function deleteProject(index) {
  projects.splice(index, 1);
}

function getProjects() {
  return projects;
}

export {
  addProject,
  deleteProject,
  getProjects,
  setCurrentProject,
  getCurrentProject,
};
