<template>
  <div class="task-list">
    <div class="filter">
      <div class="common" @click="openTask" if="!taskOpened">Задачи</div>
      <div class="deadline">Просрочены</div>
      <div class="archive">Архив</div>
    </div>

    <div class="tasks">
      <todo-list type="Archive"></todo-list>
      <todo-list type="NonArchive"></todo-list>
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";

export default {
  components: {
    TodoList
  },
  computed: {
    todos() {
      const name = `get${this.type}Todo`;
      return this.$store.getters[name];
    }
  },
  data() {
    return {
      taskOpened: "true"
    };
  },
  methods: {
    openTask() {
      this.taskOpened = false;
    }
  }
};
</script>

<style scoped>
.filter {
  display: flex;
  justify-content: center;
  align-items: center;
}

.common,
.deadline,
.archive {
  border: 1px solid black;
  width: 100px;
  height: 40px;
  background: burlywood;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tasks {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px auto;
}

.tasks__list {
  height: 40px;
}

.common:hover {
  background: #d4b375;
}

.deadline:hover {
  background: #d4b375;
}

.archive:hover {
  background: #d4b375;
}
</style>
