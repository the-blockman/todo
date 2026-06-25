function createTodo(title, dueDate, priority) {
  let completed = false;
  return { title, dueDate, priority, completed };
}

export default createTodo;
