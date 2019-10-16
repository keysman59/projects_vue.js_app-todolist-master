export default {

  getCurrentTodo(state) {
    return state.todos.filter(item => item.archive == false);
  },
  getArchiveTodo(state) {
    return state.todos.filter(item => item.archive);
  },
  getExpiredTodo(state) {
    return state.todos.filter(item => new Date(item.todo.date.split(".").reverse()) < new Date() && item.archive == false);
  },
  getTodos(state) {
    return state.todos;
  }
};
