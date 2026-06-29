import createTodo from "./todo.js";

function createProject(name) {
  const todos = [];

  const addTodo = (todo) => {
    todos.push(todo);
  };

  const getTodos = () => {
    return todos;
  };

  const deleteTodo = (index) => {
    todos.splice(index, 1);
  };

  const editTodo = (index, title, dueDate, description, priority) => {
    const newTodo = createTodo(title, dueDate, description, priority);
    todos[index] = newTodo;
  };

  return {
    addTodo,
    todos,
    name,
    getTodos,
    deleteTodo,
    editTodo,
  };
}

export default createProject;
