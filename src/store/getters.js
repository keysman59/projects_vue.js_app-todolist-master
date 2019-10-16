export default {

  getCurrentTodo(state) {
    return state.todos.filter(item => item.archive == false);
  },
  getArchiveTodo(state) {
    return state.todos.filter(item => item.archive);
  },
  getExpiredTodo(state) {
    return state.todos.filter(item => new Date(item.todo.date.split(".").reverse()) < new Date() && item.archive != false);
    
    // return state.todos.filter(item => item.expired);
    // return new Date(state.todos.split(".").reverse()) < new Date();
  },

  // getNonArchiveTodo(state) {
  //   return state.todos.filter(item => item.archive == false);
  // },
  // getArchiveTodo(state) {
  //   return state.todos.filter(item => item.archive);
  // },
  // getExpiredTodo(state) {
  //   return state.todos.filter(item => item.expired);
  // },



  getTodos(state) {
    return state.todos;
  }
};
