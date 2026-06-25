import createTodo from "./todo.js";

function createProject(name) {
  const todos = [];

  const addTodo = (todo) => {
    todos.push(todo);
  };

  const showTodos = () => {
    todos.forEach((i) => {
      console.log(i);
    });
  };

  return {
    addTodo,
    name,
    showTodos,
  };
}

const home = createProject("home");
let todo1 = createTodo("wash plate", "10-01-24", "important");
home.addTodo(todo1);
