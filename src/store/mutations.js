export default {
  setAllTodo(state) {
    const tmpTodos = localStorage.getItem('todos');
    if (tmpTodos) {
      state.todos = JSON.parse(tmpTodos);
    }
  },
  saveTodo(state) {
    localStorage.setItem('todos', JSON.stringify(state.todos));
  },
  addTodo(state, todo) {
    state.todos.push({ check: false, todo, archive: false });
  },
  archive(state, index) {
    const nonArchive = state.todos.filter(item => !item.archive);
    const archive = state.todos.filter(item => item.archive);
    nonArchive[index].archive = true;
    state.todos = [ ...archive, ...nonArchive ];
  },
  task(state, index) {
    const nonArchive = state.todos.filter(item => !item.archive);
    const archive = state.todos.filter(item => item.archive);
    archive[index].archive = false;
    state.todos = [ ...archive, ...nonArchive  ];
  },
  changeName(state, { name, id }) {
    return state.todos[id].todo.name = name;
  },
  changeDesc(state, { desc, id }) {
    return state.todos[id].todo.desc = desc;
  }
}