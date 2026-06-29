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

  return {
    addTodo,
    todos,
    name,
    getTodos,
    deleteTodo,
  };
}

export default createProject;
