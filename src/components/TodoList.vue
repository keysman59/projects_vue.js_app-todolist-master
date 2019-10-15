<template>
<div class="todo-list">
  <todo-item v-for="(todo, index) in todos" :data="todo" :index="index" :key="index"></todo-item>
</div>
</template>

<script>
import TodoItem from './TodoItem';

export default {
  components: {
    TodoItem,
  },
  props: ["type"],
  computed: {
    todos() {
      const name = `get${this.type}Todo`;
      console.log("todolist.vue name");
      console.log(name);
      return this.$store.getters[name];
    }
  }
}
</script>

<style scoped>

.todo-list {
  width: 100%;
}


</style>

