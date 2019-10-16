<template>
  <div class="task-list">
    <div class="filter">
      <div class="common" v-bind:class="{ active: viewAll }" @click="toggleFilter('viewAll')">Задачи</div>
      <div class="deadline" v-bind:class="{ active: viewOverdue }" @click="toggleFilter('viewOverdue')">Просрочены</div>
      <div class="archive" v-bind:class="{ active: viewArchive }" @click="toggleFilter('viewArchive')">Архив</div>
    </div>
    <div class="tasks">
      <todo-list :todos="todos"></todo-list>
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
      if (this.viewArchive) {
        return this.$store.getters.getArchiveTodo;
      } else if (this.viewAll) {
        return this.$store.getters.getCurrentTodo;
      } else if (this.viewOverdue) {
        return this.$store.getters.getExpiredTodo;
      }
    }
  },
  data() {
    return {
      viewArchive: false,
      viewAll: true,
      viewOverdue: false
    };
  },
  methods: {
    toggleFilter(fName) {
      Object.keys(this.$data).forEach(k => {
        this[k] = fName === k;
      });
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
  border: 1px solid #545b62;
  width: 100px;
  height: 40px;
  background-color: #6c757d;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #212529;
  background-color: #f8f9fa;
  border-color: #d3d9df;
}

.common {
  border-top-left-radius: .25rem;
  border-bottom-left-radius: .25rem;
}

.archive {
  border-top-right-radius: .25rem;
  border-bottom-right-radius: .25rem;
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

.active {
  background-color: #dae0e5;
  border-color: #d3d9df;
}

.common:hover {
  background-color: #dae0e5;
  border-color: #d3d9df;
}

.deadline:hover {
  background-color: #dae0e5;
  border-color: #d3d9df;
}

.archive:hover {
  background-color: #dae0e5;
  border-color: #d3d9df;
}
</style>
