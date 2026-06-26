import createProject from "./project.js";

const projects = [];

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

export { addProject, deleteProject, getProjects, projects };
