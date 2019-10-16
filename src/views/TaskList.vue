<template>
  <div class="task-list">
    <div class="filter">
      <div class="common" @click="toggleFilter('viewAll')">Задачи</div>
      <div class="deadline" @click="toggleFilter('viewOverdue')">Просрочены</div>
      <div class="archive" @click="toggleFilter('viewArchive')">Архив</div>
    </div>

    <div class="tasks">
      <!-- <todo-list v-bind:title="post.title"></todo-list> -->
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
      // const name = `get${this.type}Todo`;
      // return this.$store.getters[name];
      // this.viewArchive, this.viewAll, this.viewOverdue
      // Фильтрацию лучше сделать в store, передав туда фильтры как объект
      // чтобы просто получать отфильтрованные через типа
      // this.$store.getters.getTodos(filter)

      
        if (this.viewArchive) {
          return this.$store.getters.getCurrentTodo;
        } else if (this.viewAll) {
          return this.$store.getters.getArchiveTodo;
        } else if (this.viewOverdue) {
          return this.$store.getters.getExpiredTodo;
        }




      // return this.$store.getters.getTodos.filter(item => {
      //   if (this.viewArchive) {
      //     return item.archive;
      //   } else if (this.viewAll) {
      //     return item;
      //   } else if (this.viewOverdue) {
      //     return new Date(item.todo.date.split(".").reverse()) < new Date();
      //   }
      // });
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
      // содержимое параметра fName должно совпадать с именем переменной в data (view...)
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
