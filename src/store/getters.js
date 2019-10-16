export default {
  getNonArchiveTodo(state) {
    return state.todos.filter(item => item.archive == false)
  },
  getArchiveTodo(state) {
    return state.todos.filter(item => item.archive)
  },
  getExpiredTodo(state) {
    return state.todos.filter(item => item.expired)
  },
  getTodos(state) {
    return state.todos
  },

}