<template>
  <div class="task-list">
    <div class="filter">
      <div class="common" @click="allTask">Задачи</div>
      <div class="deadline">Просрочены</div>
      <div class="archive" @click="arhiveTask">Архив</div>
    </div>

    <div class="tasks">
      <todo-list type="Archive" v-if="arhOpened"></todo-list>
      <todo-list type="NonArchive" ></todo-list>
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
    // todos() {
      // const name = `get${this.type}Todo`;
      // return this.$store.getters[name];

    // },
    // todos() {
    //   return this.$store.getters.getTodos;
    // },
  },
  data() {
    return {
      taskOpened: "true",
      taskOpened: "true",
      arhOpened: "false",
    };
  },
  methods: {
    openTask() {
      this.taskOpened = false;
    },
    arhiveTask() {
      this.arhOpened = true;
    },
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
