<template>
  <div class="task-list">
    <div class="filter">
      <div class="common" v-bind:class="{ active: viewAll }" @click="toggleFilter('viewAll')">Задачи</div>
      <div class="deadline" v-bind:class="{ active: viewOverdue }" @click="toggleFilter('viewOverdue')">Просрочены</div>
      <div class="archive" v-bind:class="{ active: viewArchive }" @click="toggleFilter('viewArchive')">Архив</div>
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
          return this.$store.getters.getArchiveTodo;
        } else if (this.viewAll) {
          return this.$store.getters.getCurrentTodo;
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
  border: 1px solid #545b62;
  width: 100px;
  height: 40px;
  background-color: #6c757d;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background: #545b62;
}

.common:hover {
  background: #545b62;
}

.deadline:hover {
  background: #545b62;
}

.archive:hover {
  background: #545b62;
}
</style>
