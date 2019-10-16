export default {
  loadTodos({ commit }) {
    commit('setAllTodo');
  },
  addTodo({ commit }, todo) {
    commit('addTodo', todo);
    commit('saveTodo');
  },
  archive({ commit }, index) {
    commit('archive', index);
    commit('saveTodo');
  },
  task({ commit }, index) {
    commit('task', index);
    commit('saveTodo');
  },

  setName({ commit }, { name, id } ) {
    commit('changeName', { name, id });
    commit('saveTodo');
  },
  setDesc({ commit }, { desc, id } ) {
    commit('changeDesc', { desc, id });
    commit('saveTodo');
  },
}