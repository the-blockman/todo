function createTodo(title, dueDate, description, priority) {
  let completed = false;
  return { title, dueDate, priority, completed, description };
}

export default createTodo;
