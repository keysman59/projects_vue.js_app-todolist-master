<template>
  <div class="todo-list">
    <todo-item v-for="(todo, index) in todos" :data="todo" :index="index" :key="index"></todo-item>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  components: {
    TodoItem
  },
  props: ["type", "todos"],

};
</script>

<style scoped>
.todo-list {
  width: 100%;
}
</style>

